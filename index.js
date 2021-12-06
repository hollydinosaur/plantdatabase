const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";
import {vegetables, fruits, seeds, nuts }


MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	const dbo = db.db("mydb");
	dbo.createCollection("vegetables", function (err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});
	const vegetables = [];
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
	const grains = [
		{ name: "amaranth" },
		{ name: "barley" },
		{ name: "buckwheat" },
		{ name: "popcorn" },
		{ name: "hominy corn" },
		{ name: "millet" },
		{ name: "oats" },
		{ name: "quinoa" },
		{ name: "rice" },
		{ name: "rye" },
		{ name: "sorghum" },
		{ name: "spelt" },
		{ name: "teff" },
		{ name: "tritcale" },
		{ name: "wheat" },
		{ name: "bulgur wheat" },
		{ name: "semolina" },
		{ name: "pasta" },
		{ name: "couscous" },
		{ name: "wild rice" },
		{ name: "granola" },
	];
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
	const nuts = [
		{ name: "acorn" },
		{ name: "almond" },
		{ name: "beech nut" },
		{ name: "brazil nut" },
		{ name: "candlenut" },
		{ name: "cashew nut" },
		{ name: "chestnut" },
		{ name: "chilean hazel nut" },
		{ name: "egusi" },
		{ name: "fox nut" },
		{ name: "guinea peanut" },
		{ name: "hazelnut" },
		{ name: "pecan" },
		{ name: "kola nut" },
		{ name: "macadamia nut" },
		{ name: "malabar almond" },
		{ name: "malabar chestnut" },
		{ name: "mamoncillo" },
		{ name: "mongongo" },
		{ name: "ogbono" },
		{ name: "peanut" },
		{ name: "pine nut " },
		{ name: "pistachio" },
		{ name: "soy nuts" },
		{ name: "trail mix" },
		{ name: "paradise nut" },
		{ name: "pili" },
		{ name: "shea nut" },
		{ name: "walnut" },
	];
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
	const seeds = [
		{ name: "pumpkin seed" },
		{ name: "poppy seed" },
		{ name: "sesame seed" },
		{ name: "sunflower seed" },
		{ name: "poppy seed" },
		{ name: "pomegranete seed" },
		{ name: "watermelon seed" },
		{ name: "alfalfa seeds" },
		{ name: "chia seeds" },
		{ name: "flaxseed" },
		{ name: "hemp seeds" },
		{ name: "kalonji seeds" },
		{ name: "milk thistle seeds" },
		{ name: "mustard seeds" },
		{ name: "mixed seeds" },
	];
	dbo.collection("seeds").insertMany(seeds, function (err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});
