const dbConn = require("../database/db.config");

let UserName = function (userName) {
  this.name = userName.name;
};

UserName.get = (result) => {
  dbConn.query("SELECT * FROM testAppTable", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("names: ", res);
      result(null, res);
    }
  });
};

UserName.create = (newName, result) => {
  dbConn.query("INSERT INTO testAppTable SET ?", newName, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("created name: ", { ...newName });
      result(null, { ...newName });
    }
  });
};

module.exports = UserName;
