const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tastes: {
    type: String,
    required: true,
    enum: ["veg", "non-veg", "spicy", "sweet"],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredient: {
    type: [String],
    enum: ["rice", "chicken", "beef", "fish", "pork", "potato"],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
