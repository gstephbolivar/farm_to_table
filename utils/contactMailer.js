const nodemailer = require("nodemailer");

module.exports = function (req, res) {
  const body = req.body;

  const template = `You received an email from: ${req.body.name} at ${req.body.email}
  ------------
  ${req.body.message}
  `;

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
    to: "farrmtotable@yahoo.com",
    subject: `Contact Request from ${req.body.name}`,
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
