const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./common/db')
// PASSPORT
const passport = require('passport')  
const session = require('express-session')

// Calling the express router Class
const routes = require('./routes')

//configurando o body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes)

// TRYING TO CONNECT THE DATABASE BEFORE LIFTING THE APP
db.connect(function(err) {
    if (err) {
        console.log('Couldnt connect to the database')
        console.log(err)
    }
    else{        
        app.listen(3000, function() {
            console.log('Listening on port 3000...')
        })
    }
})