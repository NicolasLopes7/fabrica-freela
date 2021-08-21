const db = require("../../database/connection")("Operator");
module.exports = async (id, updatePayload) => {
  await db.update(updatePayload).where("id", id);
};
