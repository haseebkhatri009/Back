// routes/addfund.js
import express from "express";
import User from "../models/User.js"; // Adjust path as needed

const router = express.Router();

// Add funds route
router.post("/add", async (req, res) => {
  const { userId, amount } = req.body;

  if (!userId || !amount) {
    return res.status(400).json({ message: "User ID and amount are required" });
  }

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add funds to the user's balance
    user.balance = (user.balance || 0) + parseFloat(amount);
    await user.save();

    res.status(200).json({ message: "Funds added successfully" });
  } catch (error) {
    console.error("Error adding funds:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;