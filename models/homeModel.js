var db = require('../common/db')

exports.getWelcomeMessage = function() {
    sql = "SELECT * FROM message"
    return new Promise((resolve, reject) => {
        db.query( sql,(err, rows) => {
            if(err){
                return reject(err)
            }
            console.log("query executada com sucesso")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}

exports.getMessagebyId = function(id) {
    sql = "SELECT * FROM message WHERE msg_id = ?"
    return new Promise((resolve, reject) => {
        db.query(sql,id,(err,rows) => {
            if(err){
                console.log("Erro ao executar GETMESSAGEBYID.")
                return reject(err)
            }
            console.log("GETMESSAGEBYID executado com sucesso.")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}

exports.insertMessage = function(args) {
    sql = "INSERT INTO message (msg_author,msg_body) VALUES(?,?)"
    return new Promise ((resolve,reject) => {
        db.query(sql,args,(err,rows) => {
            if(err){
                return reject(err)
            }
            console.log("Query executada com sucesso.")
            resolve("Query executada com sucesso.")
        })
    })
}