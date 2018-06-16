var db = require('../common/dbConfig')

exports.getWelcomeMessage = function(req,res){
    db.connect()
    query = 'SELECT msg_author,msg_body FROM message WHERE msg_id = 1 '
    db.query( query, function(err, results, fields) {
        if (err) throw err
        console.log('the solution is: ',results)
    })
    db.end()
}