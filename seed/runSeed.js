const main = require("./seed-mongoose");
const {
  vegetablesArr,
  grainsArr,
  seedsArr,
  nutsArr,
  herbsAndSpicesArr,
  fruitsArr,
} = require("../db/test-data/plantData");

const usersArr = require("../db/test-data/userData");

const badgesArr = require("../db/test-data/badge");

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
