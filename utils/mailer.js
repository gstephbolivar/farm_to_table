const nodemailer = require("nodemailer");
const getTemplate = require('./confirmationTemplate');

module.exports = function (req, res) {

  const body = req.body;

  const template = getTemplate(body);

  let transporter = nodemailer.createTransport({
    service: "yahoo",
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false,
    auth: {
      user: "farm_2_table",
      pass: "huuxcyezihlvnyty",
    },
  });

  const options = {
    from: "FarmToTable<farm_2_table@yahoo.com>", // sender address
    to: body.email,
    subject: "Order Confirmation",
    text: template,
    html: template,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  });
};
