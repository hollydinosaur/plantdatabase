const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";
const { vegetables, grains, seeds, nuts } = require("./test-data/plantData");

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.createCollection("vegetables", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
    dbo.collection("vegetables").insertMany(vegetables, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.createCollection("grains", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });

    dbo.collection("grains").insertMany(grains, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.createCollection("nuts", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });

    dbo.collection("nuts").insertMany(nuts, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.createCollection("seeds", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });

    dbo.collection("seeds").insertMany(seeds, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
