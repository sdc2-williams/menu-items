const mongoose = require('mongoose');

let MenuItemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  options: Object
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);