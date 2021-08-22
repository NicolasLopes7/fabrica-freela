const create = require("./create");
const deleted = require("./delete");
const authenticate = require("./authenticate");

module.exports = {
  create,
  delete: deleted,
  authenticate
};
