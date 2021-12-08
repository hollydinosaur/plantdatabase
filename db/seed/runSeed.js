const main = require("./seed-mongoose");
const {
  vegetablesArr,
  grainsArr,
  seedsArr,
  nutsArr,
  herbsAndSpicesArr,
  fruitsArr,
} = require("../test-data/plantData");

const usersArr = require("../test-data/userData");

const badgesArr = require("../test-data/badge");

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
