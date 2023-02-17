const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/getNames", controller.get);
router.post("/postName", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
