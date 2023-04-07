// airline String airport String flightNo Number departs Date (one year from created)

const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'STL', 'SAN', 'CVG']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        default: 'Southwest'
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'STL', 'SAN', 'CVG'],
        default: 'CVG'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const yearFromDate = new Date();
            yearFromDate.setFullYear(yearFromDate.getFullYear() + 1);
            return yearFromDate;
        }
    },
    destinations: [destinationSchema],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema);
