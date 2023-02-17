const UserName = require("../models/username.model");

exports.get = (req, res) => {
  UserName.get()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occurred." });
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
  UserName.create(newName)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.put = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Content can not be empty!",
    });
  } else {
    UserName.put(req.params.id, req.body.name)
      .then(() =>
        res.send({
          error: false,
          message: "Name successfully updated",
        })
      )
      .catch((err) => res.send(err));
  }
};

exports.delete = (req, res) => {
  UserName.delete(req.params.id)
    .then(() =>
      res.send({
        error: false,
        message: "Name Successfully deleted",
      })
    )
    .catch((err) => res.send(err));
};
