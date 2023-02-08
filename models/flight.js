const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = {
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: String
    }
}

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United', 'Spirit']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true,
        default: 'SAN'
    },
    desitnation: {
        
    },
    number: {
        type: Number,
        min: 10,
        max: 9999,
        default: Math.floor(Math.random() * (9989) + 10)
    },
    departs: {
        type: String,
        required: true,
        default: function() {
            return Date().toString();
        }
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema)