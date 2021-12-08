const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.mongodb_uri) {
  throw new Error("mongodb_uri not set");
}
