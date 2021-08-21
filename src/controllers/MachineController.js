const MachineService = require("../services/machine");
const HTTPError = require("../helpers/HTTPError");

class MachineController {
  async create(req, res) {
    const { name, productionLineId } = req.body;
    if (!name || !productionLineId) {
      res.status(400);
      return res.json({ message: { error: "Missing params" } });
    }

    try {
      const machine = await MachineService.create(name, productionLineId);
      return res.json({ machine });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }

  async get(req, res) {
    try {
      const machines = await MachineService.get();
      return res.json({ machines });
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }
  async delete(req, res) {
    const { id } = req.params;

    if (!id) {
      res.status(400);
      return res.json({ error: { message: "Missing id to delete machine" } });
    }
    try {
      await MachineService.delete(id);
      return res.sendStatus(200);
    } catch (error) {
      res.status(500);
      return res.json(HTTPError(error));
    }
  }
}

module.exports = new MachineController();
