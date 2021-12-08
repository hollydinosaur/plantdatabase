require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

const db = mongoose.connection;

db.on("error", () => {
  console.error("Error Connection to MongoDB");
});
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

console.log(process.env);

mongoose.connect(process.env.mongodb_uri, { useNewUrlParser: true });

app.listen(port, () =>
  console.log(`Unit Test MongoDB with Jest app listening on port ${port}!`)
);
