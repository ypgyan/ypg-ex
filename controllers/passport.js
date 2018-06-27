// auth.js
const passport = require("passport");
const passportJWT = require("passport-jwt");
const users = require("./users.js");
const cfg = require("./configJwt.js");
const authModel = require('../models/authModel')
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    var user = authModel.findUserbyId(payload.id) || null;
    if (user) {
      return done(null, {id: user.id});
    } else {
      return done(new Error("User not found"), null);
    }
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};