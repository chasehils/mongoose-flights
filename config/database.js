// bring in mongoose module
const mongoose = require('mongoose');
const db = mongoose.connection;

// now we establish our connection to the database
mongoose.connect(process.env.DATABASE_URL)
//save a reference, a shorthand for our connection
// connection to the db

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

module.exports = mongoose