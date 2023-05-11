// first we bring in the mongoo module
const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// now we'll create the mongoose schema 
// this schema will serve as the blueprint for flights
// we define propertiers(aka paths) and assign data types to those properties

const flightSchema = new Schema({
  airline: String, //enum 'American', 'Delta'
  airport: String, // enum 'ATL', 'BOS', 'SFO', 'CUN', 'ECP'
  flightNo: Number, // 10-9999
  departure: Date     //
}, {
  timestamps: true
});

// we want to compile our schema into a model 
// we also want to export our model 
// and wel can that in one line
// we call the model method from the mongoose object
// the model method takes two arguments
// the first is the NAME we want to use to refer the model, capitalized (Flight)
// the second is the schema to use to create the model

module.exports = mongoose.model('Flight', flightSchema);