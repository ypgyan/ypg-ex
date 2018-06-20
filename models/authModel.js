var db = require('mysql')

// FUNCTION TO FIND USER BY USERNAME
exports.findUser = function(username) {
    sql = "SELECT * FROM user WHERE usu_login = ?";
    return new Promise ((resolve,reject) => {
        db.query(sql,username,(err,rows) => {
            if (err) {
                console.log("Usuario não encontrado")
                return reject(err)
            }
            console.log("Usuario encontrado pelo Username")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}

exports.findUserbyId = function(id){
    sql = "SELECT * FROM user WHERE usu_id = ?";
    return new Promise ((resolve,reject) => {
        db.query(sql,id,(err,rows) => {
            if (err) {
                console.log("Usuario não encontrado")
                return reject(err)
            }
            console.log("Usuario encontrado pelo ID")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}