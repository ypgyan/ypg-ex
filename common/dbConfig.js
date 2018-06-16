var mysql = require('mysql');

const db = mysql.createConnection({
  host: "192.168.56.101",
  user: "root",
  password: "1234",
  database: "ypg"
});

module.exports = db