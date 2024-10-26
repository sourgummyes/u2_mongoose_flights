const db = require('../db')
const { Airport } = require('../models')

const main = async () => {
    const airports = [
        {
            name: "Heathrow Airport",
            location: "London, UK",
            code: "LHR"
        },
        {
            name: "John F. Kennedy International Airport",
            location: "New York City, USA",
            code: "JFK"
        },
        {
            name: "Tokyo Haneda Airport",
            location: "Tokyo, Japan",
            code: "HND"
        },
        {
            name: "Sydney Kingsford Smith Airport",
            location: "Sydney, Australia",
            code: "SYD"
        }
    ]
    await Airport.insertMany(airports) 
    console.log('airports')
}

const run = async () => {

    await main()
    
    db.close()
  }
  
  run()