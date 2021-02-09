const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const db = require("./models");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

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

//GET api route to return a products
app.get("/api/products/:id", (req, res) => {
  db.Products.findById({_id:req.params.id}).then(product => {
      res.json(product);
  }).catch(err => {
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

//PUT route to update a product
app.put("/api/products/:id", (req, res) => {
  db.Products.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result => {
    res.json(result);
  }).catch(err => {
    res.json(err);
  })
  });
  

//POST api route to create a user
app.post("/api/users", ({ body }, res) => {
  db.User.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET api route to return selected user
app.get("/api/users", (req, res) => {
  db.User.findOne({
    username: req.query.username,
    password: req.query.password,
  })
    .then((result) => {
      console.log(req.query);
      res.json(result);
    })
    .catch((err) => res.json(err));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
