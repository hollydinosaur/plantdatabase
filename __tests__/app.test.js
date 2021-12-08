const mongoose = require("mongoose");
const main = require("../db/seed/seed-mongoose");
const testData = require("../db/test-data/index");
const { plantData, userData, badgeData } = testData;
const {
	vegetablesArr,
	grainsArr,
	seedsArr,
	nutsArr,
	herbsAndSpicesArr,
	fruitsArr,
} = plantData;
const { usersArr } = userData;
const { badgesArr } = badgeData;
const database = require("../db/connection");

describe("", () => {
	let connection;

	beforeAll(async () => {
		await main(
			vegetablesArr,
			grainsArr,
			seedsArr,
			nutsArr,
			herbsAndSpicesArr,
			fruitsArr,
			usersArr,
			badgesArr
		);
		connection = await mongoose.connect(database.mongodb_uri, {
			useNewUrlParser: true,
		});
	});
	it("get request", async () => {
		const fruit = database.collection("fruit").find({ name: "banana" });
		console.log(fruit);
		expect(fruit.name).toBe("banana");
	});
	afterEach(async () => {
		await mongoose.connection.close();
	});
});
