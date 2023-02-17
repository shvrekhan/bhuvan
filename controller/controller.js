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

exports.put = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required field",
    });
  } else {
    UserName.put(req.params.id, req.body.name, function (err, queryRes) {
      if (err) {
        res.send(err);
      } else {
        res.send({ error: false, message: "Employee successfully updated" });
      }
    });
  }
};

exports.delete = (req, res) => {
  UserName.delete(req.params.id, (err, queryRes) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ error: false, message: "Employee successfully deleted" });
    }
  });
};
