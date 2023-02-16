const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes")
require('dotenv').config()

const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/',routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
