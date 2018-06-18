var db = require('../common/db')

exports.getWelcomeMessage = function() {
    sql = "SELECT * FROM message"
    return new Promise((resolve, reject) => {
        db.connect()
        db.query( sql,(err, rows) => {
            if(err){
                db.end()
                return reject(err)
            }
            db.end()
            console.log("executou")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}

