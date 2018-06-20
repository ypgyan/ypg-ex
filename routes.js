var express = require('express')
var router = express.Router()
var home = require('./controllers/home')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// This is the Routes for homeController 
router.get('/', home.welcome)
router.get('/home', home.welcome)
router.get('/home/:id', home.getMessage)
router.post('/home/insert', home.insert) // this should be POST

module.exports = router