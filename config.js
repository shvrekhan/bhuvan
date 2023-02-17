const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
