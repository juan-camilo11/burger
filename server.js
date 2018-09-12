const express = require("express");
const bodyParser = require("body-parser");

//define our port
const PORT = process.env.PORT || 8080;

const app = express();

//serve static content from the public directory
app.use(express.static("public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

//require handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controllers.js");

app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost" + PORT);
});
