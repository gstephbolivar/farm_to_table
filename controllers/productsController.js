const express = require("express");
const router = express.Router();
const db = require("../models");

//GET api route to return a product
router.get("/api/products/:id", (req, res) => {
  db.Products.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET api route to return all products
router.get("/api/products", (req, res) => {
  db.Products.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET api route to return all products based on category
router.get("/api/products/filtered/:category", (req, res) => {
  db.Products.find({ category: req.params.category })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

//POST api route to create a product
router.post("/api/products", ({ body }, res) => {
  db.Products.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//PUT route to update a product
router.put("/api/products/:id", (req, res) => {
  db.Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/products/:id", (req, res) => {
  db.Products.findOneAndUpdate({ _id: req.params.id }, { quantity: req.body })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      re.json(err);
    });
});

// DELETE route for a product
router.delete("/api/products/:id", (req, res) => {
  db.Products.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
