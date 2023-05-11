////////////////
//Import Dependencies
////////////////
require('dotenv').config()
const mongoose = require('../config/database')
const Flight = require('./flight')
mongoose.connect(process.env.DATABASE_URL)


//////////////////
// See Script Code
////////////////
//save the connection in a variable
const db = mongoose.connection
console.log('db in seed file', db)

db.on('open', () => {
  //start with an array of flights
    const startFlights = [
      {
      airline: 'Delta', 
      airport: 'BOS', 
      flightNo: 7684, 
      departure: '2023-10-23'
     },
      {
      airline: 'Delta', 
      airport: 'CUN', 
      flightNo: 1494, 
      departure: '2024-03-14'
      },
      {
      airline: 'JetBlue', 
      airport: 'ATL', 
      flightNo: 9094, 
      departure: '2024-06-19'
      },
      {
      airline: 'Spirit', 
      airport: 'ECP', 
      flightNo: 1012, 
      departure: '2024-09-14'
     },
     {
      airline: 'United Airlines', 
      airport: 'JFK', 
      flightNo: 1682, 
      departure: '2024-09-01'
     },
     {
      airline: 'Delta', 
      airport: 'SFO', 
      flightNo: 8458, 
      departure: '2024-01-11'
     }     
    ]
 
  // when we seed data, we want to delete everything in the database in that collection
// this avoids duplicates
Flight.deleteMany({})
.then(deletedFlights => {
  console.log('this is what remove returns', deletedFlights)
  // afer that we run a create to insert documents into the db
      Flight.create(startFlights)
          .then(data => {
            console.log('this is what was created', data)
            db.close()
        })
          .catch(err => {
            console.log(err)
            db.close()
        })
    })
      .catch(err => {
        console.log(err)
        db.close()
    })
})