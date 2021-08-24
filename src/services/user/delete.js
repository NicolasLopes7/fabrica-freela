const db = require("../../database/connection");

module.exports = async (id) => {
   return await db("User").delete().where("id", id)
}