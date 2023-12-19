const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: "Full name is required" },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  isEmailVerified: { type: Boolean, default: false },
  password: { type: String, select: false },
  roles: {
    type: Array,
    default: ["user"],
    required: true,
  },
  coins: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  isActive: { type: Boolean, default: false },
});

module.exports = model("User", userSchema);
