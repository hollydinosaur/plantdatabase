const ENV = process.env.NODE_ENV || "development";

const database = require("dotenv").config({
	path: `${__dirname}/../.env.${ENV}`,
});

if (database.error) {
	throw database.error;
}

module.exports = database.parsed;
