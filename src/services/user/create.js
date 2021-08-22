const db = require("../../database/connection")("User");

module.exports = async (login, password) => {
  const insertedUser = await db
    .insert({ login, password, role: "admin" })
    .returning("*");
  if (insertedUser) {
    return insertedUser[0];
  }
};
