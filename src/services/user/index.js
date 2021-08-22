const create = require("./create");
const deleted = require("./delete");
const update = require("./update");
const authenticate = require("./authenticate");

module.exports = {
    create,
    delete: deleted,
    update,
    authenticate
}