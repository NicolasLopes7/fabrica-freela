const OperatorActionService = require("../services/operatorActions");
const HTTPError = require("../helpers/HTTPError");

class OperatorActionsController {
  async create(req, res) {
    const { machineId } = req.params;

    try {
      const operatorAction = await OperatorActionService.create(machineId);
      return res.json({ operatorAction });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async index(req, res) {
    const { ...queryParams } = req.query;

    try {
      const operatorActions = await OperatorActionService.get(queryParams);

      return res.json({ operatorActions });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }
}

module.exports = new OperatorActionsController();
