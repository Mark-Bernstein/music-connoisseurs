// Set up MySQL connection.
var mysql = require("mysql");

// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.send.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'd6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'rw0r6n2rfyde7biu',
//     password: 'g92d2893hjdenecs',
//     database: 'uylkyjc9hkq1fcvy'
//   })
// }

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "maekisk00117ownz",
  database: "genre_database"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;