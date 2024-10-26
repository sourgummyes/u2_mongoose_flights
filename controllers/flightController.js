const { Airport, Flight } = require('../models')

const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getFlightById = async (req, res) => {
    try {
        const { id } = req.params;
        const flight = await Flight.findById(id);
        if (flight) {
            return res.json(flight);
        }
        return res.status(404).send(`Flight with id of ${id} not found!`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Flight doesn't exist`);
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllFlights,
    getFlightById
}