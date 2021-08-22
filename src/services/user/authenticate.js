const db = require("../../database/connection");

module.exports = async ({ login, password }) => {
  const response = await db.raw(
    `SELECT id FROM "User" WHERE login='${login}' AND password='${password}'`
  );

  if (response.rows.length == 0)
    throw Error("No user found with these login and password");
  return;
};
