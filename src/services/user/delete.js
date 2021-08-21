const db = require("../../database/connection")("User");

module.exports = async (id) => {
   await db.delete().where("id", id)
}