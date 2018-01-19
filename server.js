// dependencies
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

//express and express running body parser for json
let app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Require and set HTML routes in this file
require('./routing/htmlRoutes.js')(app);

// Require and set API routes in this file
require('./routing/apiRoutes.js')(app);

// set up server listening
app.listen(PORT, () => {
	console.log("Now listening on: " + PORT);
});