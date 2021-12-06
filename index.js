const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	const dbo = db.db("mydb");
	dbo.createCollection("vegetables", function (err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});
	const vegetables = [
		{ name: "artichoke" },
		{ name: "asparagus" },
		{ name: "avocado" },
		{ name: "bamboo shoots" },
		{ name: "beetroot" },
		{ name: "bell pepper" },
		{ name: "bok choi" },
		{ name: "broccoli" },
		{ name: "brussels sprouts" },
		{ name: "burdock root" },
		{ name: "green cabbage" },
		{ name: "red cabbage" },
		{ name: "savoy cabbage" },
		{ name: "calabash" },
		{ name: "capers" },
		{ name: "carrot" },
		{ name: "cassava" },
		{ name: "cauliflower" },
		{ name: "celery" },
		{ name: "celeriac" },
		{ name: "chayote" },
		{ name: "kai-lan" },
		{ name: "baby corn" },
		{ name: "cucumber" },
		{ name: "gherkin" },
		{ name: "daikon radish" },
		{ name: "edamame" },
		{ name: "aubergine" },
		{ name: "elephant garlic" },
		{ name: "endive" },
		{ name: "fennel" },
		{ name: "fiddlehead" },
		{ name: "galangal" },
		{ name: "garlic" },
		{ name: "ginger" },
		{ name: "grape leaves" },
		{ name: "grean beans" },
		{ name: "string beans" },
		{ name: "wax beans" },
		{ name: "amaranth leaves" },
		{ name: "beet greens" },
		{ name: "collard greens" },
		{ name: "dandelion greens" },
		{ name: "kale" },
		{ name: "kohlrabi greens" },
		{ name: "mustard greens" },
		{ name: "rapini" },
		{ name: "spinach" },
		{ name: "swiss chard" },
		{ name: "turnip greens" },
		{ name: "hearts of palm" },
		{ name: "horseradish" },
		{ name: "sunchokes" },
		{ name: "jícama" },
		{ name: "kohlrabi" },
		{ name: "leeks" },
		{ name: "lemongrass" },
		{ name: "butterhead lettuce" },
		{ name: "iceberg lettuce" },
		{ name: "green leaf lettuce" },
		{ name: "red leaf lettuce" },
		{ name: "romaine lettuce" },
		{ name: "lotus root" },
		{ name: "lotus seed" },
		{ name: "chantrelle mushrooms" },
		{ name: "baby bella mushrooms" },
		{ name: "enoki mushrooms" },
		{ name: "miatake mushrooms" },
		{ name: "morel mushrooms" },
		{ name: "oyster mushrooms" },
		{ name: "porcini mushrooms" },
		{ name: "royal trumpet mushrooms" },
		{ name: "shiitake mushrooms" },
		{ name: "truffles" },
		{ name: "white button mushrooms" },
		{ name: "chestnut mushrooms" },
		{ name: "portobello mushrooms" },
		{ name: "napa cabbage" },
		{ name: "nopales" },
		{ name: "okra" },
		{ name: "green olive" },
		{ name: "black olive" },
		{ name: "white onion" },
		{ name: "red onion" },
		{ name: "parsley" },
		{ name: "parsley root" },
		{ name: "parsnip" },
		{ name: "green peas" },
		{ name: "snow peas" },
		{ name: "sugar snap peas" },
		{ name: "anaheim pepper" },
		{ name: "banana pepper" },
		{ name: "cherry pepper" },
		{ name: "chipotle pepper" },
		{ name: "fresno pepper" },
		{ name: "habenero pepper" },
		{ name: "hungarian pepper" },
		{ name: "jalapeño pepper" },
		{ name: "new mexico pepper" },
		{ name: "poblano pepper" },
		{ name: "serrano pepper" },
		{ name: "sport pepper" },
		{ name: "thai pepper" },
		{ name: "cubanelle pepper" },
		{ name: "pimento pepper" },
		{ name: "sweet banana pepper" },
		{ name: "plantain" },
		{ name: "potato" },
		{ name: "new potato" },
		{ name: "pumpkin" },
		{ name: "purslane" },
		{ name: "radicchio" },
		{ name: "radish" },
		{ name: "rutabaga" },
		{ name: "winged kelp" },
		{ name: "aonori" },
		{ name: "arame" },
		{ name: "bladderwrack" },
		{ name: "carageen moss" },
		{ name: "chlorella" },
		{ name: "digitata kelp" },
		{ name: "dulse" },
		{ name: "hijiki" },
		{ name: "kelp" },
		{ name: "kombu" },
		{ name: "nori" },
		{ name: "mozuku" },
		{ name: "ogonori" },
		{ name: "rockweed" },
		{ name: "sea grape" },
		{ name: "sea lettuce" },
		{ name: "spirulina" },
		{ name: "wakame" },
		{ name: "shallots" },
		{ name: "squash" },
		{ name: "courgette" },
		{ name: "sweet potato" },
		{ name: "sweetcorn" },
		{ name: "swiss chard" },
		{ name: "taro" },
		{ name: "tomatillo" },
		{ name: "cherry tomato" },
		{ name: "tomato" },
		{ name: "turnip" },
		{ name: "water chestnut" },
		{ name: "water spinach" },
		{ name: "watercress" },
		{ name: "winter melon" },
		{ name: "yams" },
	];
	dbo.collection("fruit").insertMany(vegetables, function (err, res) {
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
