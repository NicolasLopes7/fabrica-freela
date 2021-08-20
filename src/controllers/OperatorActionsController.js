const OperatorActionService = require("../services/operatorActions");
const HTTPError = require("../helpers/HTTPError");

class OperatorActionsController {
  async create(req, res) {
    const { operatorId } = req.body;

    try {
      const operatorAction = await OperatorActionService.create(operatorId);
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
