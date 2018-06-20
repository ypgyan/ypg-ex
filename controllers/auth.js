const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const authModel = require('../models/authModel')

module.exports = function(passport){
    // Cofiguraremos o passport
    passport.seralizeUser(function(user,done){
        done(null,usu.id)
    })

    passport.deserializeUser(function(id,done){
        authModel.findUserbyId(id,function(err,user){
            done(err,user)
        })
    })

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        authModel.findUser(username, (err,user) => {
            if (err) { return done(err) }
            
            // USUÁRIO INEXISTENTE
            if( !user ) { return done(null,false) }

            // COMPARANDO AS SENHAS
            bcrypt.compare(password,user.password,(err, isValid) => {
                if (err) { return done(err) }
                if (!isValid) { return done(null, false) }
                return done(null, user)
            })
        })
    }))
}