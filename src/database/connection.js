require("dotenv").config();
const knex = require("knex");
const config = require("../../knexfile");

let databaseConnection;

if (process.env.NODE_ENV === "PRODUCTION") {
  databaseConnection = knex(config.production);
} else {
  databaseConnection = knex(config.development);
}

module.exports = databaseConnection;
