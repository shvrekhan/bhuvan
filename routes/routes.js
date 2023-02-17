const express = require("express");
const router = express.Router();
const {
  getNamesController,
  createNameController,
  updateNameController,
  deleteNameController,
} = require("../controller/controller");

router.get("/getNames", getNamesController);
router.post("/postName", createNameController);
router.put("/:id", updateNameController);
router.delete("/:id", deleteNameController);
module.exports = router;
