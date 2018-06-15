var express = require('express')
var router = express.Router()
var example = require('./routes/example')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// This is the standard home route of YPG 
router.get('/', function (req, res) {
  res.send('Welcome to YPG')
})

router.use('/example', example)

module.exports = router