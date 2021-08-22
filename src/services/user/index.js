const create = require("./create");
const deleted = require("./delete");
const update = require("./update")

module.exports = {
    create,
    delete: deleted,
    update
}