const db = require("../../database/connection")("ProductionLine");

module.exports = async (id, { name, operators }) => {
    if (name) {
        await db.update({ name }).where("id", id);
      }

      if (operators) {
        for await (const operator of operators) {
          await db.update({ productionLineId: id }).where("id", operator);
        }
      }
}