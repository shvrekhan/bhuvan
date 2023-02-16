const mysql = require("mysql2");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Messi@10",
  database: "testApp",
});

dbConn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Database Connected ! ");
  }
});

module.exports = dbConn;
