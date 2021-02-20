const express = require("express");
const router = express.Router();
const db = require("../models");
const sendMail = require("../utils/mailer.js");

router.post("/api/lineitems", (req, res) => {
  db.LineItem.insertMany(req.body)
    .then((result) => {
      updateProductQuantity(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/sendconfirmation", (req, res) => {
  sendMail(req, res);
});

async function updateProductQuantity(result) {
  db.Products.find({}).then(async (products) => {
    const ids = result.map((r) => r.product.toString());
    const lineItemProducts = products.filter((prod) => {
      return ids.includes(prod._id.toString());
    });

    await Promise.all(
      result.map(async (x) => {
        let currentProduct = lineItemProducts.find(
          (p) => p._id.toString() === x.product.toString()
        );
        await db.Products.findOneAndUpdate(
          { _id: x.product },
          { quantity: Math.max(currentProduct.quantity - x.quantity, 0) },
          { new: true }
        );
      })
    );
  });
}

router.post("/api/orders", (req, res) => {
  db.Order.create(req.body)
    .then((order) => {
      db.Products.findOneAndUpdate;
      res.json(order);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/orders", (req, res) => {
  db.Order.find({})
    .populate("customer")
    .populate({
      path: "LineItem",
      populate: { path: "product", select: "_id name" },
    })
    .then((result) => {
      res.json(result);
    });
});

router.get("/api/orders/:customer", (req, res) => {
  db.Order.find({ customer: req.params.customer }, { orderDate: 1 })
    // populates the data from the referenced models and selects the fields specified
    .populate({
      path: "LineItem",
      select: { unitSize: 0 },
      populate: {
        path: "product",
        select: { name: 1, _id: 0, pathway: 1, unitType: 1, unitSize: 1 },
      },
    })
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
