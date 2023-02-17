const dbConn = require("../database/db.config");

let UserName = function (userName) {
  this.name = userName.name;
};

UserName.get = () => {
  return new Promise((resolve, reject) => {
    dbConn.query("SELECT * FROM testAppTable", (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log("names: ", res);
        resolve(res);
      }
    });
  });
};

UserName.create = (newName) => {
  return new Promise((resolve, reject) => {
    dbConn.query("INSERT INTO testAppTable SET ?", [newName], (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log("created name: ", { ...newName });
        resolve({ ...newName });
      }
    });
  });
};

UserName.put = (id, name) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "UPDATE testAppTable SET name=? WHERE id = ?",
      [name, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

UserName.delete = (id) => {
  return new Promise((resolve, reject) => {
    dbConn.query("DELETE FROM testAppTable WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = UserName;
