///////////////////
// Export our modules 
////////////////////
module.exports = {
  new: newFlight,
  create,
  index,
  show
};


///////////////////
// Import Dependencies
////////////////////
// import the flight model 
const Flight = require('../models/flight')


/////////////////////////////////
// Define our controller functions 
////////////////////////////
function newFlight(req, res) {
  const newFlight = new Flight();
  
  // render error msg if create fails
res.render('flights/new', {
  title: 'Add Flight'
  
})
}

function create(req, res) {
  console.log('this is the req.body in create\n', req.body)
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) {
      console.log(err)
      return res.render('flights/new', {
        title: "Add Flight"
      })  
    }
    console.log(flight)
    res.redirect('/flights');
  })

}

function show(req, res) {
  Flight.findById(req.params.id)

}

function index(req, res) {
  // sending an empty curly means find everyting 
  Flight.find({}, (err, flights) => {
    if (err) console.log(err)
    const now = new Date().toISOString();
    flights.forEach(flight => {
      if (flight.departs.toISOString() < now) 
      flight.past = true;
    })
    res.render('flights/index', {
      title: "All FLights",
      flights
    })
  })
}





