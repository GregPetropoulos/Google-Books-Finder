const db = require('../database/models');

// Defining methods for the usersController
module.exports = {
findAll:(req,res)=> {
  db.Book
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
}