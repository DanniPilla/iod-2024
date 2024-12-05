const express = require("express");
const router = express.Router();
const minionsController = require("../controllers/minionsContoller");

router.get("/", (req, res) => {
  minionsController.getAllMinions(res);
});

router.get("/:id", (req, res) => {
  minionsController.getAllMinionsById(res);
});

module.exports = router;
