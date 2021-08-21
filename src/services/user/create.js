const db = require("../../database/connection")("User");

module.exports = async (login, password, role) => {
    const insertedUser = await db.insert({login, password, role}).returning("*");
    if (insertedUser){
        return insertedUser[0];
    }
}