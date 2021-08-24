const db = require("../../database/connection");

module.exports = async (id, { name, operators }) => {
  if (name) {
    await db("ProductionLine").update({ name }).where("id", id);
  }

  if (operators) {
    for await (const operator of operators) {
      await db("Operator")
        .update({ productionLineId: id })
        .where("id", operator);
    }
  }
};
