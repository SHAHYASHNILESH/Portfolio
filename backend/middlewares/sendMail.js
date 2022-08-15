const { createTransport } = require("nodemailer");
module.exports.sendMail = async function sendMail(text) {
  const transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1f8a3feff7d515",
      pass: "aa70029155274e",
    },
  });
  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: "nileshshah0409@yahoo.co.in",
    from: "nileshshah0409@yahoo.co.in",
    text,
  });
};
