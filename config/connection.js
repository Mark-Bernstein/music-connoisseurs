// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'bjrz09yojl1nxyd7',
    password: 'f28bv5hv1azqz9jl',
    database: 'jicvb1qcegchcifs'
  })
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Maekownz22!",
//   database: "genre_database"
// });

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