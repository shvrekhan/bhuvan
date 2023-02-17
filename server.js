const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");
const {port} = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
