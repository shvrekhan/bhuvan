const UserName = require("../models/username.model");

exports.get = (req, res) => {
  UserName.get((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.post = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const newName = {
    name: req.body.name,
  };
  UserName.create(newName, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    } else {
      res.send(data);
    }
  });
};
