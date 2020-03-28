const mysql = require("mysql");
require("dotenv").config({ path: "../config/.env" });

exports.dbConnection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.DBUSER,
  password : process.env.DBPASSWORD,
  database : process.env.DATABASE
});
