const db = require("../../database/connection");
module.exports = async (id) => {
  await db("ProductionLine").update({ deleted: true }).where("id", id);
};
