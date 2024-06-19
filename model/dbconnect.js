var mysql = require("mysql");

//connection
var connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  port: "3306",
  database: "test",
});

//check connection
connection.connect(function (err) {
  if (err) {
    console.log("error", err.sqlMessage);
  } else {
    console.log("connection established succesfully");
  }
});

//export
module.exports = connection;
