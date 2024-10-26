const { Schema } = require('mongoose')

const flightSchema = new Schema(
    {
        airline: { type: String, required: true },
        flight_number: {type: Number, required: true},
        price: {type: Number, required: true},
        numberOfSeats: {type: Number, required: true},
        departingAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
        arrivalAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
        departDateTime: {type: String, required: true},
        arriveDateTime: {type: String, required: true}
    },
    {timestamps: true})

module.exports = flightSchema