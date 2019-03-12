const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const PORT = process.env.PORT_NUMBER || 3000;
const routes = require("./api");

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compression());
app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
