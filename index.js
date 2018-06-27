const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./common/db');
const routes = require('./routes');

// Setting BODY-PARSER
app.use(bodyParser.json());

// ROUTES
app.use('/', routes)

// TRYING TO CONNECT THE DATABASE BEFORE LIFTING THE APP
db.connect(function(err) {
    if (err) {
        console.log('Couldn\'t connect to the database');
        console.log(err);
    }
    else{        
        app.listen(3000, function() {
            console.log('Listening on port 3000...');
        })
    }
});