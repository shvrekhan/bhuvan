const dbConn = require("../database/db.config");

const getUserNames = () => {
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

const createUserName = (newName) => {
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

const updateUserName = (id, name) => {
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

const deleteUserName = (id) => {
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

module.exports = {
  getUserNames,
  createUserName,
  updateUserName,
  deleteUserName,
};
