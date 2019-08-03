const mongoose = require("mongoose");
const logger = require("morgan");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/reports";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, function() {
  console.log(`==> App listening at Port ${PORT}`);
});
