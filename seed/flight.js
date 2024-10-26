const db = require('../db')
const { Airport } = require('../models')
const { Flight } = require("../models")


const main = async () => {
    const LHR = await Airport.find({ code: 'LHR' })
    const JFK = await Airport.find({ code: 'JFK' })
    const HND = await Airport.find({ code: 'HND' })
    const SYD = await Airport.find({ code: 'SYD' })
    
    flights = [
        {
            airline: "British Airways",
            flight_number: 101,
            price: 450,
            numberOfSeats: 180,
            departingAirport: LHR[0].id,
            arrivalAirport: JFK[0].id,
            departDateTime: "2024-11-01  14:00:00",
            arriveDateTime: "2024-11-01  17:30:00"
        },
        {
            airline: "American Airlines",
            flight_number: 202,
            price: 500,
            numberOfSeats: 150,
            departingAirport: JFK[0].id,
            arrivalAirport: LHR[0].id,
            departDateTime: "2024-11-05  20:00:00",
            arriveDateTime: "2024-11-06  08:30:00"
        },
        {
            airline: "All Nippon Airways",
            flight_number: 303,
            price: 600,
            numberOfSeats: 200,
            departingAirport: HND[0].id,
            arrivalAirport: LHR[0].id,
            departDateTime: "2024-11-10  22:00:00",
            arriveDateTime: "2024-11-11  05:00:00"
        },
        {
            airline: "Qantas",
            flight_number: 404,
            price: 550,
            numberOfSeats: 160,
            departingAirport: SYD[0].id,
            arrivalAirport: HND[0].id,
            departDateTime: "2024-11-15  12:30:00",
            arriveDateTime: "2024-11-16  08:00:00"
        },
        {
            airline: "United Airlines",
            flight_number: 505,
            price: 480,
            numberOfSeats: 170,
            departingAirport: JFK[0].id,
            arrivalAirport: SYD[0].id,
            departDateTime: "2024-11-20  15:00:00",
            arriveDateTime: "2024-11-22  08:00:00"
        },
        {
            airline: "Cathay Pacific",
            flight_number: 606,
            price: 520,
            numberOfSeats: 190,
            departingAirport: HND[0].id,
            arrivalAirport: SYD[0].id,
            departDateTime: "2024-11-25  23:00:00",
            arriveDateTime: "2024-11-27  06:30:00"
        },
        {
            airline: "Emirates",
            flight_number: 707,
            price: 650,
            numberOfSeats: 175,
            departingAirport: SYD[0].id,
            arrivalAirport: JFK[0].id,
            departDateTime: "2024-11-30  10:00:00",
            arriveDateTime: "2024-12-01  12:00:00"
        }
    ]

    await Flight.insertMany(flights) 
    console.log('rflights....')
}

const run = async () => {

    await main()
    
    db.close()
  }
  
  run()