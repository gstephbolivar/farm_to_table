require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const sendMail = require("./utils/mailer.js");
const contactMail = require("./utils/contactMailer");

const app = express();
const db = require("./models");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const AuthController = require("./controllers/authController");

app.use(express.static("client/build"));
app.use("/api/users", AuthController);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farm-to-table",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

//GET api route to return a product
app.get("/api/products/:id", (req, res) => {
  db.Products.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET api route to return all products
app.get("/api/products", (req, res) => {
  db.Products.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/orders/:id", (req, res) => {
  db.Order.findById(req.params.id)
    .populate({path: "LineItem",  populate: {"product" }, "price quantity totalCost"})
    // .populate("product")
    // .populate("name")
    .then((orders) => {
      res.json(orders);
      console.log(orders);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET api route to return all products based on category
app.get("/api/products/filtered/:category", (req, res) => {
  //console.log(req.params.category);
  db.Products.find({ category: req.params.category })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json(err);
    });
});

//POST api route to create a product
app.post("/api/products", ({ body }, res) => {
  db.Products.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET api route to get a product by id
// app.get("/api/products/:id", (req, res) => {
//   console.log(req.params.id);
//   db.Products.findOne({ _id: req.params.id })
//     .then((result) => {
//       console.log(result);
//       res.json(result);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
//PUT route to update a product
app.put("/api/products/:id", (req, res) => {
  db.Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/products/:id", (req, res) => {
  db.Products.findOneAndUpdate({ _id: req.params.id }, { quantity: req.body })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      re.json(err);
    });
});

app.post("/api/lineitems", (req, res) => {
  db.LineItem.insertMany(req.body)
    .then((result) => {
      updateProductQuantity(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/sendconfirmation", (req, res) => {
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

app.post("/api/orders", (req, res) => {
  db.Order.create(req.body)
    .then((order) => {
      db.Products.findOneAndUpdate;
      res.json(order);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/orders", (req, res) => {
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

// DELETE route for a product
app.delete("/api/products/:id", (req, res) => {
  db.Products.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST route for user to contact website
app.post("/api/contact", (req, res) => {
  contactMail(req, res);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
