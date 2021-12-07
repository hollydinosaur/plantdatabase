const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/plantAppTest";
const {
	vegetables,
	grains,
	seeds,
	nuts,
	herbsAndSpices,
	fruits,
} = require("../db/test-data/plantData");

MongoClient.connect(url)
	.then((database) => {
		const dbo = database.db("plantApp_test");
		dbo.dropDatabase();
		dbo.createCollection("vegetables");
		return dbo;
	})
	.then((dbo) => {
		dbo.createCollection("grains");
		return dbo;
	})
	.then((dbo) => {
		dbo.createCollection("nuts");
		return dbo;
	})
	.then((dbo) => {
		dbo.createCollection("seeds");
		return dbo;
	})
	.then((dbo) => {
		dbo.createCollection("herbsAndSpices");
		return dbo;
	})
	.then((dbo) => {
		dbo.createCollection("fruits");
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("vegetables").insertMany(vegetables);
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("grains").insertMany(grains);
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("nuts").insertMany(nuts);
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("seeds").insertMany(seeds);
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("herbsAndSpices").insertMany(herbsAndSpices);
		return dbo;
	})
	.then((dbo) => {
		dbo.collection("fruits").insertMany(fruits);
	})
	.catch((err) => {
		console.log(err);
	});
