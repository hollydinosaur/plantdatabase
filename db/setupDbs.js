const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url)
  .then(() => {
    const dbDev = database.db("plantAppDb_dev");
    dbDev.dropDatabase();
    const dbTest = database.db("plantAppDb_test");
    dbTest.dropDatabase();
  })
  .then(() => {
    dbDev.createDatabase("plantAppDb_dev");
    dbTest.createDatabase("plantAppDb_test");
  })
  .catch((err) => {
    console.log(err);
  });
