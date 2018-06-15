var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
    res.send('This should redirect to index of Example controller')
})
router.get('/about', function (req, res) {
    res.send('This shold return the About about Example')
})

module.exports = router