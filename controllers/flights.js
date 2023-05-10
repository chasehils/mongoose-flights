module.exports = {
  new: newFlight
};
function newFlight(req, res) {
  // render error msg if create fails
  res.render('flights/new', { errorMsg: ''});
}