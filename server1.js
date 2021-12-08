const db = require("./index");
const app = require("./app");

const port = process.env.PORT || 3000;

db.connect().then(() => {
	app.listen(port, () => {
		console.log(`listening on port ${port}`);
	});
});
