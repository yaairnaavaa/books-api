const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    titulo: {type: String},
    autor: {type: String},
    isbn: {type: String},
    genero: {type: String},
    precio: {type: Number},
    stock: {type: Number},
    img: {type: String},
});

module.exports = mongoose.model('Book', bookSchema, 'book');
