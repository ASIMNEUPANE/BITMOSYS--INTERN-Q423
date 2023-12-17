const { Schema, model } = require("mongoose");

const coinsShema = new Schema({
  name: { type: String, requires: "Full name is required" },
  
});

module.exports = model("Coins", userSchema);
