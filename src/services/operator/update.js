const db = require("../../database/connection")("Operator");
module.exports = async (id, { name }) => {
  await db.update({ name }).where("id", id);
};
