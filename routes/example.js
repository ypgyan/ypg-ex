var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
    res.send('This should go to index of Example controller')
})
router.get('/about', function (req, res) {
    res.send('About Example')
})

module.exports = router