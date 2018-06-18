const express = require('express')
const app = express()
const db = require('./common/db')
const bodyParser = require('body-parser')

// Calling the express router Class
const routes = require('./routes')

//configurando o body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes)

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})