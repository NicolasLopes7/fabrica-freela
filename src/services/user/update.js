const db = require("../../database/connection");

module.exports = async (id, password) => {

    return await db("User").update({password: password}).where("id", id)

}