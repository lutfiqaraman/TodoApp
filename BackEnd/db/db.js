const mysql = require("mysql");
require("dotenv").config({ path: "../config/.env" });

const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.DBUSER,
  password : process.env.DBPASSWORD,
  database : process.env.DATABASE
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
