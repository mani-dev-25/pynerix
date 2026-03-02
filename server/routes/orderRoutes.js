const router = require("express").Router();
const Order = require("../models/Order");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { sendConfirmation } = require("../utils/sendEmail");

// Create Order
router.post("/", protect, async (req, res) => {
  const { title, description, amount } = req.body;

  const order = await Order.create({
    user: req.user.id,
    title,
    description,
    amount
  });

  const upiId = process.env.UPI_ID;
  const name = "Pynerix";
  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=Order-${order._id}`;

  res.json({
    order,
    upiLink
  });
});

// Confirm Payment (After user pays and admin verifies)
router.put("/confirm/:id", protect, adminOnly, async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user");

  order.isPaid = true;
  await order.save();

  await sendConfirmation(order.user.email, order._id);

  res.json({ message: "Payment confirmed & email sent" });
});

// Admin Get Orders
router.get("/", protect, adminOnly, async (req, res) => {
  const orders = await Order.find().populate("user", "email name");
  res.json(orders);
});

module.exports = router;