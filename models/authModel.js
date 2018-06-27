var db = require('../common/db')


exports.getUserbyId = function(id) {
    sql = "SELECT * FROM user WHERE usu_id = ?"
    return new Promise((resolve, reject) => {
        db.query(sql,id,(err,rows) => {
            if(err){
                console.log("Erro ao executar GETUSERBYID.")
                return reject(err)
            }
            console.log("GETUSERBYID executado com sucesso.")
            resolve(JSON.parse(JSON.stringify(rows[0])))
        })
    })
}