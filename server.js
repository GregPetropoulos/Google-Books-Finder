const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const mongooseConnection = require('./database');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// var morgan = require('morgan')
app.use(express.urlencoded({ extended: true }));//Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// MONGO ATLAS
// const CONNECTION_URL= mongodb://gregadmindb:<password>@cluster0-shard-00-00.qste2.mongodb.net:27017,cluster0-shard-00-01.qste2.mongodb.net:27017,cluster0-shard-00-02.qste2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-4ykzyn-shard-0&authSource=admin&retryWrites=true&w=majority

// Sessions
app.use(
  session({
    secret: 'RANDOM STRING',
    store: new MongoStore({
      mongooseConnection,
    }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
