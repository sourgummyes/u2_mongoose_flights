const { Airport, Flight } = require('../models')

const getAllAirports = async (req, res) => {
    try {
        const airports = await Airport.find();
        res.json(airports);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getAirportById = async (req, res) => {
    try {
        const { id } = req.params;
        const airport = await Airport.findById(id);
        if (airport) {
            return res.json(airport);
        }
        return res.status(404).send(`Airport with id of ${id} not found!`);
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That Airport doesn't exist`);
        }
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllAirports,
    getAirportById
}