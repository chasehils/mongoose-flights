///////////////////
// Import Dependencies
////////////////////
// import the flight model 
const Flight = require('../models/flight')


/////////////////////////////////
// Define our controller functions 
////////////////////////////
function newFlight(req, res) {
  // render error msg if create fails
  res.render('flights/new', { errorMsg: ''});
}

function create(req, res) {
  console.log('this is the req.body in create\n', req.body)
  

  // the mongoose model method create adds documents to the db
  // Flight.create(req.body, function(err, flightDoc) {
  //   if (err) {
  //     console.log('==============errr')
  //     console.log(err)
  //     console.log('===================')

  //     return res.send('err creating, check the terminal')
  //   }
  //   console.log('======below is the flight from the db====')
  //   console.log(flightDoc)
  //   console.log('==============================')
  //     res.sed(`Flight Created: ${flightDoc.title}`)
  // })


    Flight.create(req.body)
    .then(flgithDoc)
        console.log('======below is the flight from the db====')
        console.log(flightDoc)
        console.log('==============================')
        return res.sed(`Flight Created: ${flightDoc.title}`)
    .catch(err => {
        console.log('==============errr')
        console.log(err)
        console.log('===================')
        return res.send('err crfeating, check the terminal')
    })
  // res.send('hit the post route for flights')
}

function index(req, res) {
  // sending an empty curly means find everyting 
  Flight.find({})
      .then(flightDocs => {
        console.log('found all the flughts\n', flightDocs)
        res.render('movies/index', {flights: flightDocs})
      })
      .catch(err => {
        console.log('==============errr')
        console.log(err)
        console.log('===================')
        return res.send('err crfeating, check the terminal')
    })
}



///////////////////
// Export our modules 
////////////////////
module.exports = {
  new: newFlight,
  create,
  index
};


