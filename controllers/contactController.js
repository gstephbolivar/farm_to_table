const express = require("express");
const router = express.Router();
const contactMail = require("../utils/contactMailer.js");

// POST route for user to contact website
router.post("/api/contact", (req, res) => {
  contactMail(req, res);
});

module.exports = router;
