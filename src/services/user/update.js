const db = require("../../database/connection")("User");

module.exports = async (id, password) => {

    return await db.update({password: password}).where("id", id)

}