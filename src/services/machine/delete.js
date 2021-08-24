const db = require("../../database/connection");
module.exports = async (id) => {
  await db("Machines").update({ deleted: true }).where("id", id);
};
