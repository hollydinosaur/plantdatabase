const mongoose = require("mongoose");
const database = require("./db/connection");

const connect = () => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(database.mongodb_uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then((res, err) => {
				if (err) return reject(err);
				resolve();
			});
	});
};

const close = () => {
	return mongoose.disconnect();
};

module.exports = { connect, close };
