const db = require("../../database/connection")("ProductionLine");
module.exports = async (id) => {
  await db.update({ deleted: true }).where("id", id);
};
