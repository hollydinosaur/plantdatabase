const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";
const {
  vegetables,
  grains,
  seeds,
  nuts,
  herbsAndSpices,
  fruits,
} = require("./test-data/plantData");

MongoClient.connect(url)
  .then((database) => {
    const dbo = database.db("mydb");
    return dbo.createCollection("vegetables");
  })
  .then(() => {
    return dbo.createCollection("grains");
  })
  .then(() => {
    return dbo.createCollection("nuts");
  })
  .then(() => {
    return dbo.createCollection("seeds");
  })
  .then(() => {
    return dbo.createCollection("herbsAndSpices");
  })
  .then(() => {
    return dbo.createCollection("fruits");
  })
  .then(() => {
    return dbo.collection("vegetables").insertMany(vegetables);
  })
  .then(() => {
    return dbo.collection("grains").insertMany(vegetables);
  })
  .then(() => {
    return dbo.collection("nuts").insertMany(vegetables);
  })
  .then(() => {
    return dbo.collection("seeds").insertMany(vegetables);
  })
  .then(() => {
    return dbo.collection("herbsAndSpices").insertMany(vegetables);
  })
  .then(() => {
    return dbo.collection("fruits").insertMany(vegetables);
  });
