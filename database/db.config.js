const mysql = require("mysql2");
const { host, user, password, database } = require("../config");

const dbConn = mysql.createConnection({
  host,
  user,
  password,
  database,
});

dbConn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Connected ! ");
  }
});

module.exports = dbConn;
