const mongoose = require('mongoose');

//Modelo para la creación de categorías
const CategorySchema = new mongoose.Schema({
  title: { type: String}
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);