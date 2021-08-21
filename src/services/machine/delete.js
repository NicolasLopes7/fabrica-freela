const db = require("../../database/connection")("Machines");
module.exports = async (id) => {
  await db.update({ deleted: true }).where("id", id);
};
