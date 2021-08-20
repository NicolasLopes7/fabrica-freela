const create = require("./create");
const update = require("./update");
const deleteProductionLine = require("./delete");
const get = require("./get");

module.exports = {
  create,
  update,
  delete: deleteProductionLine,
  get,
};
