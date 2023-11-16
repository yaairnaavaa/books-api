const Book = require('../models/book.model');

// Consultar todos los libros
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(
            {
                message: 'Libros obtenidos con éxito',
                data: books
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar libros',
                data: error
            }
        );
    }
};

// Consultar libro por id
exports.getBookById = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.findById(bookId);
        return res.status(200).json(
            {
                message: 'Libro obtenido con éxito',
                data: book
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al consultar libro',
                data: error
            }
        );
    }
};

// Crear libro
exports.newBook = async (req, res) => {
    try {
        const { titulo, autor, isbn, genero, precio, stock } = req.body;
        const newBook = new Book({ titulo, autor, isbn, genero, precio, stock, img });
        await newBook.save();

        return res.status(200).json(
            {
                message: 'Libro creado con éxito',
                data: newBook
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al crear libro',
                data: error
            }
        );
    }
};

// Actualizar libro
exports.updateBook = async (req, res) => {
    const bookId = req.params.bookId;
    const newData = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(bookId, newData, { new: true });
        return res.status(201).json(
            {
                message: 'Actualizar libro por ID',
                data: updatedBook
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Error al actualizar libro',
                data: error
            }
        );
    }
};

// Eliminar libro
exports.deleteBook = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        await Book.findByIdAndDelete(bookId);
        return res.status(201).json(
            {
                message: 'Libro eliminado con éxito'
            }
        );
    } catch (error) {
        console.log((error));
        return res.status(500).json(
            {
                message: 'Error al eliminar libro',
                data: error
            }
        );
    }
};
