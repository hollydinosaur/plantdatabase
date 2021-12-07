const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
	.then((database) => {
		const db = database.db("test");
		db.createDatabase("plantAppDb_dev");
		// const dbTest = database.db("plantAppDb_test");
		// dbTest.dropDatabase();
	})
	// .then((database) => {
	// 	db.createDatabase("plantAppDb_dev");
	// 	// dbTest.createDatabase("plantAppDb_test");
	// })
	.catch((err) => {
		console.log(err);
	});
