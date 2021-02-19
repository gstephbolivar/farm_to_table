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
    address: {
      street: "123 Admin Rd",
      city: "Atlanta",
      state: "Georgia",
      zip: "12345",
    },
    password: "$2b$10$SBkLhziZQyGqPmMTlG0HROkNXh2LjpPJ7GovrCEco/3nR8wPgILVm", //admin1234
    role: "admin",
  },
  {
    email: "ngtych4@gmail.com",
    name: "Neil Gandhi",
    address: {
      street: "7506 Scupper Drive",
      city: "Hanahan",
      state: "South Carolina",
      zip: "29410",
    },
    password: "$2b$10$kH9V0nnPPRc1fwaNzSCBxOgCO4QAFC0AoWAOejO8Ses.TuyVDXF22", //password1234
    role: "customer",
  },
];

const productsSeed = [
  {
    name: "Apples",
    description: "Red and Delicious",
    unitType: "pounds",
    unitSize: 3,
    price: 4.99,
    quantity: 20,
    category: "fruit",
    pathway: "/assets/product_images/fruits/apples.png",
  },
  {
    name: "Watermelon",
    description: "Sweet and Delicious!",
    unitType: "each",
    unitSize: 1,
    price: 3.99,
    quantity: 20,
    category: "fruit",
    pathway: "/assets/product_images/fruits/watermelon.png",
  },
  {
    name: "Blueberries",
    description: "They're blue?",
    unitType: "pound",
    unitSize: 1,
    price: 3.49,
    quantity: 25,
    category: "fruit",
    pathway: "/assets/product_images/fruits/blueberries.png",
  },
  {
    name: "Peaches",
    description: "Georgia grown and sweet as can be!",
    unitType: "pound",
    unitSize: 1,
    price: 1.49,
    quantity: 25,
    category: "fruit",
    pathway: "/assets/product_images/fruits/peaches.png",
  },
  {
    name: "Cabbage",
    description: "Coleslaw anyone?",
    unitType: "pounds",
    unitSize: 1,
    price: 2.29,
    quantity: 10,
    category: "vegetable",
    pathway: "/assets/product_images/vegetables/cabbage.png",
  },
  {
    name: "Carrots",
    description: "Hand harvested and washed, ready to eat.",
    unitType: "pounds",
    unitSize: 3,
    price: 3.00,
    quantity: 10,
    category: "vegetable",
    pathway: "/assets/product_images/vegetables/carrots.png",
  },
  {
    name: "Eggplant",
    description: "Vibrantly purple and ready to mingle!",
    unitType: "each",
    unitSize: 1,
    price: 2.29,
    quantity: 10,
    category: "vegetable",
    pathway: "/assets/product_images/vegetables/eggplant.png",
  },
  {
    name: "Corn",
    description: "Picked and washed, still in the husk.",
    unitType: "pounds",
    unitSize: 2,
    price: 2.99,
    quantity: 10,
    category: "vegetable",
    pathway: "/assets/product_images/vegetables/corn.png",
  },
  {
    name: "Chicken Breast",
    description: "Cluck Cluck...",
    unitType: "pound",
    unitSize: 1,
    price: 2.79,
    quantity: 30,
    category: "meat",
    pathway: "/assets/product_images/meat/chicken.png",
  },
  {
    name: "Chicken Wings",
    description: "Always fresh and ready for any occasion.",
    unitType: "pounds",
    unitSize: 3,
    price: 5.49,
    quantity: 30,
    category: "meat",
    pathway: "/assets/product_images/meat/wings.png",
  },
  {
    name: "Pork Chops",
    description: "Lean and tender!",
    unitType: "pound",
    unitSize: 1,
    price: 2.29,
    quantity: 30,
    category: "meat",
    pathway: "/assets/product_images/meat/porkChop.png",
  },
  {
    name: "New York Strip",
    description: "A cut above your average steak...",
    unitType: "pound",
    unitSize: 1,
    price: 8.99,
    quantity: 30,
    category: "meat",
    pathway: "/assets/product_images/meat/strips.png",
  },
  {
    name: "Milk",
    description: "Does the body good!",
    unitType: "liters",
    unitSize: 2,
    price: 3.99,
    quantity: 40,
    category: "dairy",
    pathway: "/assets/product_images/dairy/milk.png",
  },
  {
    name: "Eggs",
    description: "Breakfast? Baking? Can't live without em!",
    unitType: "dozen",
    unitSize: 1,
    price: 2.99,
    quantity: 50,
    category: "dairy",
    pathway: "/assets/product_images/dairy/eggs.png",
  },
  {
    name: "Parmesan Cheese",
    description: "Each batch aged 2 years",
    unitType: "ounces",
    unitSize: 6,
    price: 3.99,
    quantity: 40,
    category: "dairy",
    pathway: "/assets/product_images/dairy/parmesanCheese.png",
  },
  {
    name: "Blue Cheese",
    description: "Soft blue cheese with slightly sweet undertones",
    unitType: "pints",
    unitSize: 4,
    price: 2.99,
    quantity: 40,
    category: "dairy",
    pathway: "/assets/product_images/dairy/blueCheese.png",
  },
];

// seed initial user data
db.User.deleteMany({})
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
db.Products.deleteMany({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
