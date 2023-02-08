const Flight = require('../models/flight');

module.exports = {
    update
}

function update(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
       console.log(flight)
        flight.destination.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flight/${flight._id}`)
        });
    });
}
