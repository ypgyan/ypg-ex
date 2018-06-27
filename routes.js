const express = require('express')
const router = express.Router()
const home = require('./controllers/home')
const db = require('./common/db');
const authModel = require('./models/authModel')
const auth = require("./controllers/passport")();
const jwt = require("jwt-simple");
const cfg = require("./common/configJwt");

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

// Routes to test authentication
router.get("/user", auth.authenticate(), function(req, res) {
  console.log(req.user.id)
});

router.post("/token", function(req, res) {
  console.log("Inside Token")
  if (req.body.email && req.body.password) {
    console.log(req.body.email)
    var email = req.body.email;
    var password = req.body.password;
    authModel.getUserbyEmail(email)
      .then((user) => {
        console.log("entrou no then")
        if (user.usu_pwd == password && user.usu_email == email) {
          console.log(user)
          var payload = {id: user.id};
          var token = jwt.encode(payload, cfg.jwtSecret);
          res.json({token: token});
        } else {
          res.sendStatus(401);
        }
      }).catch((err) => {
        console.log("Erro ao gerar token" + err)
      })
  } else {
    res.sendStatus(401);
  }
});

module.exports = router