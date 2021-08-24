const db = require("../../database/connection")("User");

module.exports = async (id) => {
   return await db.delete().where("id", id)
}