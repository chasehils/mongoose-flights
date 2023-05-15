// first we bring in the mongoo module
const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// now we'll create the mongoose schema 
// this schema will serve as the blueprint for flights
// we define propertiers(aka paths) and assign data types to those properties

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American Airlines', 'Delta', 'JetBlue', 'Spirit', 'United Airlines']
  },
  airport: {
    type: String,
    enum: ['ATL', 'BOS', 'CUN', 'SFO', 'ECP']
  }, 
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  }, 
  departure: {
    type: Date, default: function () {
      const newDate = new Date();
      return newDate.setFullYear(newDate.getFullYear() + 1)
    }
  },
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