const express = require("express");
const router = express.Router();
const UserName = require("../models/username.model")

router.get("/getNames", (req, res) => {
  UserName.get((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    else res.send(data);
  });
});
 
router.post("/postName", (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const name = {
    name: req.body.name,
  };
  UserName.create(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    else res.send(data);
  });
});

module.exports = router;
