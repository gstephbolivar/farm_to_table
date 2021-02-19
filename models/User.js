const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  // both first and last name - can create nested object if needed
  name: {
    type: String,
    required: ["Please enter your name!"],
  },
  //   can potentially break this into nested object with street, city, state, zip
  // address: {
  //   type: String,
  //   required: ["Please enter a valid address!"],
  // },
  address: {
    street: {
      type: String,
      required: ["Please enter a valid Street"],
    },
    city: {
      type: String,
      required: ["Please enter a valid City"],
    },
    state: {
      type: String,
      required: ["Please enter a valid State"],
    },
    zip: {
      type: String,
      required: ["Please enter a valid Zip"],
    },
  },
  password: {
    type: String,
    required: ["Please enter a valid password!"],
  },
  role: {
    type: String,
    default: "customer",
  },
});
UserSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
