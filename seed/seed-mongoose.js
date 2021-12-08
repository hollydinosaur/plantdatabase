const mongoose = require("mongoose");

main().catch((err) => {
  console.log(err);
});

async function main(
  vegetablesArr,
  grainsArr,
  seedsArr,
  nutsArr,
  herbsAndSpicesArr,
  fruitsArr,
  usersArr,
  badgesArr
) {
  await mongoose.connect("mongodb://localhost:27017/plantMongooseTest");
  await mongoose.connection.db.dropDatabase();

  const plantSchema = new mongoose.Schema({
    name: String,
    category: String,
  });

  const Fruit =
    mongoose.models["Fruit"] || mongoose.model("Fruit", plantSchema);
  const Vegetable =
    mongoose.models["Vegetable"] || mongoose.model("Vegetable", plantSchema);
  const Seed = mongoose.models["Seed"] || mongoose.model("Seed", plantSchema);
  const Nut = mongoose.models["Nut"] || mongoose.model("Nut", plantSchema);
  const Grain =
    mongoose.models["Grain"] || mongoose.model("Grain", plantSchema);
  const HerbsAndSpice =
    mongoose.models["HerbsAndSpice"] ||
    mongoose.model("HerbsAndSpice", plantSchema);
  await Fruit.create(fruitsArr);
  await Vegetable.create(vegetablesArr);
  await Seed.create(seedsArr);
  await Nut.create(nutsArr);
  await Grain.create(grainsArr);
  await HerbsAndSpice.create(herbsAndSpicesArr);

  const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    currentWeek: Array,
    badges: Array,
    streak: Object,
    userPlants: Array,
  });

  const User = mongoose.models["User"] || mongoose.model("User", userSchema);
  await User.create(usersArr);

  const badgeSchema = new mongoose.Schema({
    name: String,
    img_url: String,
  });

  const Badge =
    mongoose.models["Badge"] || mongoose.model("Badge", badgeSchema);
  await Badge.create(badgesArr);

  mongoose.connection.close();
}

module.exports = main;
