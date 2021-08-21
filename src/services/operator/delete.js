const db = require("../../database/connection")("Operator");
module.exports = async (id) => {
  await db.update({ deleted: true }).where("id", id);
};
