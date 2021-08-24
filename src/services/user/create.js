const db = require("../../database/connection");

module.exports = async (login, password) => {
  const insertedUser = await db("User")
    .insert({ login, password, role: "admin" })
    .returning("*");
  if (insertedUser) {
    return insertedUser[0];
  }
};
