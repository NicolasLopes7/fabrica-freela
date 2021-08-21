const create = require("./create");
const deleteMachine = require("./delete");
const get = require("./get");

module.exports = {
  create,
  delete: deleteMachine,
  get,
};
