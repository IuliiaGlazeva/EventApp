const express = require('express')
const cors = require('cors')
const db = require('./models')
const bodyParser = require('body-parser')
const Event = require('./models/event')
const app = express()
.use(cors())
.use(bodyParser.json())
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

sequelize.sync({force:false})


const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log('Express API listening on port 4001')
})


app.get('/events', (req, res) => {
  const events = Event
    .findAll()
    .then((events) => {
      res.json(events)
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the events. Please try again' })
    })
})


app.post('/events', (req, res) => {
  const event = req.body
  console.log(event)

    Event.create(event).then(entity => {
      Event.create(event).then(entity => {
        res.status(201).send(entity)
    })
    res.end()
  })
})
