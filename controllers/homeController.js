var homeModel = require('../models/homeModel')

exports.welcome = function(req, res) {
    homeModel.getWelcomeMessage()
        .then((results) => {
            res.send(results)
        })
        .catch(function(err){
            console.log(err)
        })
}