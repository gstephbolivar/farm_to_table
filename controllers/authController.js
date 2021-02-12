const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", ({ body }, res) => {
  // hash password
  console.log(body.password);
  bcrypt.hash(body.password, 10).then((hashPassword) => {
    console.log(hashPassword);
    // create database user object
    const newUser = {
      username: body.username,
      name: body.name,
      address: body.address,
      password: hashPassword,
      email: body.email,
    };
    // create user in database
    User.create(newUser)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((foundUser) => {
    //console.log(foundUser.password);
    //console.log(req.body.password);
    bcrypt
      .compare(req.body.password, foundUser.password)
      .then((result) => {
        //console.log(result);
        if (result) {
          res.json({
            // send login token and userId
            token: "AdminToken",
            _id: foundUser._id,
          });
        } else {
          res.status(401).end();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
