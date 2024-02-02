const mongoose = require("mongoose");
const mongodbUrl = "mongodb://localhost:27017/hotels";
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connected");
});

db.on("error", (err) => {
  console.log("internal server error", err);
});
db.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});
module.exports = db;
