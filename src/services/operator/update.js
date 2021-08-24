const db = require("../../database/connection");
module.exports = async (id, updatePayload) => {
  console.log(id);
  console.log(updatePayload);
  await db("Operator").update(updatePayload).where("id", id);
};
