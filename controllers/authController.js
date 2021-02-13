const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", ({ body }, res) => {
  // hash password
  console.log(body.password);
  bcrypt.hash(body.password, 10).then((hashPassword) => {
    console.log(hashPassword);
    // create database user object
    const newUser = {
      email: body.email,
      name: body.name,
      address: body.address,
      password: hashPassword,
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
  User.findOne({ email: req.body.email })
    .then((foundUser) => {
      console.log(foundUser.password);
      console.log(req.body.password);
      bcrypt
        .compare(req.body.password, foundUser.password)
        .then((result) => {
          const token = jwt.sign({ _id: result._id }, "secretpassword");
          console.log(token);
          console.log(result);
          if (result) {
            res.json({
              // send login token and userId
              // jwt token has id in it to send back
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
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
