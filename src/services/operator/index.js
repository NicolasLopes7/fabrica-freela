const create = require("./create");
const update = require("./update");
const deleteOperator = require("./delete");
const get = require("./get");

module.exports = {
  create,
  update,
  delete: deleteOperator,
  get,
};
