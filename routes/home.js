var express = require('express')
var router = express.Router()
var homeController = require('../controllers/homeController')

// define the HomeController route
router.get('/', homeController.welcome)

router.get('/home/insert/', homeController.insert)

router.get('/home/:id', function (req, res) {
    res.send('This should return the user with ID 1.')
})

module.exports = router