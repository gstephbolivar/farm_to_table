const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farm-to-table",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const userSeed = [
  {
    email: "admin@mail.com",
    name: "Admin Admin",
    address: "123 Admin Rd",
    password: "$2b$10$SBkLhziZQyGqPmMTlG0HROkNXh2LjpPJ7GovrCEco/3nR8wPgILVm", //admin1234
    role: "admin",
  },
  {
    email: "ngtych4@gmail.com",
    name: "Neil Gandhi",
    address: "7506 SCUPPER DR",
    password: "$2b$10$kH9V0nnPPRc1fwaNzSCBxOgCO4QAFC0AoWAOejO8Ses.TuyVDXF22", //password1234
    role: "customer",
  },
];

const productsSeed = [
  {
    name: "Apples",
    unitSize: "pounds",
    price: 2.99,
    quantity: 10,
    category: "fruit",
  },
  {
    name: "Lettuce",
    unitSize: "each",
    price: 3.49,
    quantity: 10,
    category: "vegetable",
  },
  {
    name: "Chicken",
    unitSize: "pounds",
    price: 4.99,
    quantity: 10,
    category: "meat",
  },
  {
    name: "Cheese",
    unitSize: "pounds",
    price: 4.99,
    quantity: 10,
    category: "dairy",
  },
  {
    name: "Tomatoes",
    unitSize: "pounds",
    price: 4.99,
    quantity: 10,
    category: "vegetable",
  },
  {
    name: "Apples",
    unitSize: "pounds",
    price: 4.99,
    quantity: 10,
    category: "fruit",
  },
];

// seed initial user data
db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// seed initial products data
// db.Products.remove({})
//   .then(() => db.Products.collection.insertMany(productsSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
