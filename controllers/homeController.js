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

exports.getMessage = function(req,res) {
    params = req.params
    homeModel.getMessagebyId(params.id)
        .then((results) => {
            res.send(results)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
}       

exports.insert = function(req, res) {
    var message = ['Microsoft','XBOXONE é o melhor console da atualidade.']
    homeModel.insertMessage(message)
        .then((results) => {
            var resp = 'Message inserted succesfuly';
            res.send(resp)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
}