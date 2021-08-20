const db = require("../../database/connection")("ProductionLine");
module.exports = async () => {
    const productionLines = await db.select("*").where("deleted", false);
    return productionLines
}