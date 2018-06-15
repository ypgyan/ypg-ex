var express = require('express')
var router = express.Router()
var homeController = require('../controllers/homeController')

// define the HomeController route
router.get('/', homeController.welcome)

router.get('/user/:id', function (req, res) {
    res.send('This should return the user with ID 1.')
})

module.exports = router