var mysql = require("mysql");
var pass = "toor";

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "burgers_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.log("error connecting " + err.stack);
    return;
  }
  console.log("Connected...");
});

module.exports = connection;