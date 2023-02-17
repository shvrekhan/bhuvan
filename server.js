const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
// const { port } = require("./config");
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
