const express = require("express");
const router = express.Router();
const calculatorController =
require('../controllers/calculatorController')

router.get('/add', (req, res) => {
  calculatorController.addNumbers(req,res)
  })

// router.get("/add", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let sum = number1 + number2;

//   console.log(sum);
//   res.status(200);
//   res.json({ result: sum });
// });

router.get("/subtract", (req, res) => {
  calculatorController.subtractNumbers(req,res)
  // let number1 = parseInt(req.query.num1);
  // let number2 = parseInt(req.query.num2);
  // let sum = number1 - number2;

  // console.log(sum);
  // res.status(200);
  // res.json({ result: sum });
});

router.get("/divide", (req, res) => {
  calculatorController.divideNumbers(req,res)
  // let number1 = parseInt(req.query.num1);
  // let number2 = parseInt(req.query.num2);
  // let sum = number1 / number2;

  // console.log(sum);
  // res.status(200);
  // res.json({ result: sum });
});

router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req,res)
  // let number1 = parseInt(req.query.num1);
  // let number2 = parseInt(req.query.num2);
  // let sum = number1 * number2;

  // console.log(sum);
  // res.status(200);
  // res.json({ result: sum });
});

module.exports = router;
