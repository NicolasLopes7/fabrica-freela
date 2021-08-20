const db = require("../../database/connection")("ProductionLine");
module.exports = async (id) => {
  await db.update({ deleted: false }).where("id", id);
};
