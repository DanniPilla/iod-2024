const express = require("express");
const app = require("./app");
const port = 3000;

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const app1 = express();
const port1 = 2000;

const app2 = express();
const port2 = 3001;

const app3 = express();
const port3 = 3002;

const userRoutes = require("./routes/userRoutes");

app.listen(port, () => {
  console.log(`Example app listening at
  http://localhost:${port}`);
});
app1.use(express.json());
// map the user routes to our app
app1.use("/users", userRoutes);

const productRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
const friendRoutes = require('./routes/friendRoutes');

app1.use('/friends', friendRoutes); // Lab 4

app1.use("/", express.static("public"));

app1.use("/calculator", calculatorRoutes);

app2.use("/test", productRoutes);

app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.listen(port1, () => {
  console.log(`Example app listening
at http://localhost:${port1}`);
});

app2.get("/", (req, res) => {
  res.send("Hello World!");
});

app2.listen(port2, () => {
  console.log(`Example app listening
    at http://localhost:${port2}`);
});

app3.get("/", (req, res) => {
  res.send("Hello World!");
});

app3.listen(port3, () => {
  console.log(`Example app listening
        at http://localhost:${port3}`);
});
