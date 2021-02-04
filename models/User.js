const { Schema } = require("mongoose");

const UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: ["Please enter a valid username!"],
  },
  // both first and last name - can create nested object if needed
  name: {
    type: String,
    required: ["Please enter your name!"],
  },
  //   can potentially break this into nested object with street, city, state, zip
  address: {
    type: String,
    required: ["Please enter a valid address!"],
  },
  password: {
    type: String,
    required: ["Please enter a valid password!"],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});
