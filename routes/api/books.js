const router = require('express').Router();
const bookController = require('../../controllers/bookController');

// MATCHES WITH '/api/books'
router.route('/')
.get(bookController.findAll)
.get(bookController.create);

// MATCHES WITH '/api/books/:id'
router.route('/:id')
.get(bookController.findById)
.put(bookController.update)
.delete(bookController.remove);

module.exports =router;
