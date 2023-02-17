const {
  getUserNames,
  createUserName,
  updateUserName,
  deleteUserName,
} = require("../models/username.model");

const getNamesController = (req, res) => {
  getUserNames()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occurred." });
    });
};

const createNameController = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const newName = {
    name: req.body.name,
  };
  createUserName(newName)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

const updateNameController = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Content can not be empty!",
    });
  } else {
    updateUserName(req.params.id, req.body.name)
      .then(() =>
        res.send({
          error: false,
          message: "Name successfully updated",
        })
      )
      .catch((err) => res.send(err));
  }
};

const deleteNameController = (req, res) => {
  deleteUserName(req.params.id)
    .then(() =>
      res.send({
        error: false,
        message: "Name Successfully deleted",
      })
    )
    .catch((err) => res.send(err));
};

module.exports = {
  getNamesController,
  createNameController,
  updateNameController,
  deleteNameController,
};
