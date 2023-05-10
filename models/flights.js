const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String, //enum 'American', 'Delta'
  airport: String, // enum 'ATL', 'BOS', 'SFO', 'CUN', 'ECP'
  flightNo: Number, // 10-9999
  departs: Date     //
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);