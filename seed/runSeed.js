const main = require("./seed-mongoose");
const {
	vegetablesArr,
	grainsArr,
	seedsArr,
	nutsArr,
	herbsAndSpicesArr,
	fruitsArr,
} = require("../db/test-data/plantData");

const runSeed = () => {
	return main(
		vegetablesArr,
		grainsArr,
		seedsArr,
		nutsArr,
		herbsAndSpicesArr,
		fruitsArr
	);
};

runSeed();
