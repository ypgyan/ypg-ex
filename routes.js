var express = require('express')
var router = express.Router()
var home = require('./routes/home')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// This is the standard home route of YPG 
router.get('/', home)
router.use('/home', home)

module.exports = router