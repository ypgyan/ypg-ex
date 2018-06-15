const express = require('express')
const app = express()

// Calling the express router Class
const routes = require('./routes')

app.use('/', routes)

app.listen(3000, () => console.log('YPG listening on port 3000!'))