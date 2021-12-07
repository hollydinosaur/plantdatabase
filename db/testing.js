const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/plantAppTest";
const {
	vegetables,
	grains,
	seeds,
	nuts,
	herbsAndSpices,
	fruits,
} = require("./test-data/plantData");
