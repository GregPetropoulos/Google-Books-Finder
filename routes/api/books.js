const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// MATCHES WITH '/api/books'
router.route('/')
.get(booksController.findAll)
.get(booksController.create);

// MATCHES WITH '/api/books/:id'
router.route('/:id')
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove);

module.exports =router;