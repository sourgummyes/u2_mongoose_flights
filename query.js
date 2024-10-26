const db = require('./db')
const { Airport, Flight } = require('./models')

async function createAirport(name, location, code) {
    const airport = new Airport({ name, location, code });
    await airport.save();
    console.log(`Airport created: ${airport}`);
}

async function createFlight(airline, flight_number, price, numberOfSeats, departingAirport, arrivalAirport, departDateTime, arriveDateTime) {
    const flight = new Flight({ airline, flight_number, price, numberOfSeats, departingAirport, arrivalAirport, departDateTime, arriveDateTime });
    await flight.save();
    console.log(`Flight created: ${flight}`);
}

async function updateAirport(code, updateData) {
    const result = await Airport.findOneAndUpdate({ code }, updateData, { new: true });
    console.log(`Airport updated: ${result}`);
}

async function updateFlight(flight_number, updateData) {
    const result = await Flight.findOneAndUpdate({ flight_number }, updateData, { new: true });
    console.log(`Flight updated: ${result}`);
}

async function deleteAirport(code) {
    await Airport.findOneAndDelete({ code });
    console.log(`Airport with code ${code} deleted.`);
}

async function deleteFlight(flight_number) {
    await Flight.findOneAndDelete({ flight_number });
    console.log(`Flight with number ${flight_number} deleted.`);
}
