const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then((database) => {
    const db = database.db("test");
    db.createDatabase("plantAppDb_dev");
  })
  .catch((err) => {
    console.log(err);
  });
