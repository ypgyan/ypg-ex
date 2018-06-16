var homeModel = require('../models/homeModel')

exports.welcome = function(req, res) {
    res.send(homeModel.getWelcomeMessage());
}