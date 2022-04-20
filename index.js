const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const routeUser = require('./routes/user.route')

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/jsonp
app.use(bodyParser.json())

//mongoose
mongoose.connect('mongodb://localhost/firegroup')
app.use('/api/user', routeUser)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})