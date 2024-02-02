const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");
app.use("/menu", menuRoutes);
app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.send("Welocme to my Hotel ");
});

app.listen(3000, () => {
  console.log("Server is Listning on Port 3000 ....");
});
