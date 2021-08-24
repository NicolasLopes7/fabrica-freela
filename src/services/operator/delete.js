const db = require("../../database/connection");
module.exports = async (id) => {
  await db("Operator").update({ deleted: true }).where("id", id);
};
