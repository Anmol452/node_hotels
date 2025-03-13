const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const bodyParser = require('body-parser')
const menusrouter = require('./router/menusrouter')
const person = require('./router/personrouter')
// const menus = require('../models/menus')


app.use(bodyParser.json())
app.use('/menus', menusrouter)
app.use('/person', person)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// create data


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})