const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights' );

//GET 
// this route is /flights/new
router.get('/new', flightsCtrl.new);

router.get('/', flightsCtrl.index)

// POST flight creation 
// this route is /flights
router.post('/', flightsCtrl.create)


  
module.exports = router;
