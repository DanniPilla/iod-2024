const express = require("express");
const app = express();
let dbConnect = require("./lib/dbConnect");

let minionsRoutes = require("./routes/minionsRoutes");

// parse requests of content-type -application / json;
app.use(express.json());
app.use("/api/minions", minionsRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
