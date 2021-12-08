const main = require("./seed-mongoose");
const { data } = require("../test-data/index");
const { plantData, userData, badgeData } = data;
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
const runSeed = () => {
	return main(
		vegetablesArr,
		grainsArr,
		seedsArr,
		nutsArr,
		herbsAndSpicesArr,
		fruitsArr,
		usersArr,
		badgesArr
	);
};

runSeed();
