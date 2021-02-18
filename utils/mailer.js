const nodemailer = require("nodemailer");

module.exports = function (req, res) {

  const body = req.body;

  const template = `Thank you for your order, ${body.name}! Your confirmation number is ${body.orderId}. You may come pick up your order whenever you decide. We will hold your order for 3 days.`;

  let transporter = nodemailer.createTransport({
    service: "yahoo",
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false,
    auth: {
      user: "farrmtotable",
      pass: "rvocokhuzefmyrch",
    },
  });

  const options = {
    from: "FarmToTable<farrmtotable@yahoo.com>", // sender address
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
