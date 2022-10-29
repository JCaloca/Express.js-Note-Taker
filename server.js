// Setting up dependencies
const express = require("express");
const app = express();

// including the port to be tested on and heroku port
const PORT = process.env.PORT || 3000;

// requiring routes.js files
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
