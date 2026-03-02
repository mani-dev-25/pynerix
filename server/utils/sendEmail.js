const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendConfirmation = async (toEmail, orderId) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Pynerix Order Confirmed",
    text: `Your order ${orderId} has been confirmed successfully!`
  });
};