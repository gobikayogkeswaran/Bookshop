// Import required modules
const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  price: Number,
  category: String
});

// Create a model based on the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
