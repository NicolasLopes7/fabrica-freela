const OperatorService = require("../services/operator");
const HTTPError = require("../helpers/HTTPError");

class OperatorController {
  async create(req, res) {
    const { name, productionLineId } = req.body;

    if (!name || !productionLineId) {
      res.status(400);
      return res.json({
        error: {
          message: "missing params",
          required: {
            params: ["name", "productionLineId"],
          },
        },
      });
    }

    try {
      const operator = await OperatorService.create(name, productionLineId);

      return res.json({ operator });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async update(req, res) {
    const { operatorId } = req.params;
    const { ...updateOperatorData } = req.body;

    if (Object.keys(req.body).length === 0) {
      res.status(400);
      return res.json({
        error: { message: "Missing params to update operator" },
      });
    }

    try {
      await OperatorService.update(operatorId, updateOperatorData);
      return res.sendStatus(200);
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async index(req, res) {
    try {
      const operators = await OperatorService.get();
      return res.json({ operators });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async delete(req, res) {
    const { operatorId } = req.params;
    try {
      await OperatorService.delete(operatorId);
      return res.sendStatus(200);
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }
}

module.exports = new OperatorController();
