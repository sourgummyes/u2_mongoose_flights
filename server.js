
const express = require('express') 
const PORT = process.env.PORT || 3006
const cors = require('cors')
const db = require('./db')

const { Airport, Flight } = require('./models')

const airportController = require('./controllers/airportController')
const flightcontroller = require('./controllers/flightController')

const app = express() 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send('test')
})

app.get('/airports', airportController.getAllAirports)
app.get('/airports/id/:id', airportController.getAirportById)

app.get('/flights', flightcontroller.getAllFlights)

app.get('/flights/id/:id', flightcontroller.getFlightById)
