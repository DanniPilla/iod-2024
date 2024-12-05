const express = require("express");
const router = express.Router();
const minionsController = require("../controllers/minionsContoller");

router.get("/", (req, res) => {
  minionsController.getAllMinions(req, res);
});

router.get("/:id", (req, res) => {
  minionsController.getMinionsById(req, res);
});

module.exports = router;
