const userService = require("../services/user");
const HTTPError = require("../helpers/HTTPError");

class UserController {
  async create(req, res) {
    const { login, password, role } = req.body;

    if (!login || !password) {
      res.status(400);
      return res.json({
        error: {
          message: "missing params",
          required: {
            params: ["login", "password"],
          },
        },
      });
    }

    try {
      const user = await userService.create(login, password);
      return res.json({ user });
    } catch (error) {
      res.status(500);
      if (error.code == 23505) {
        return res.json({
          error: "a user with this same login exists",
        });
      }
      return res.json(HTTPError(error));
    }
  }

  async delete(req, res) {
    const { userId } = req.params;

    await userService.delete(userId);

    return res.sendStatus(200);
  }

  
  async update(req, res) {
    const {userId} = req.params
    let {password} = req.body
  
    password = password.trim()
  
    if(password.trim().length == 0){
      return res.json({ error: "o campo de nova senha deve estar preenchido"})
    }
  
      else{
        await userService.update(userId, password)

        return res.sendStatus(200)
    }
  }
  

  async authenticate(req, res) {
    const { login, password } = req.body;

    try {
      await userService.authenticate({ login, password });
      return res.sendStatus(200);
    } catch (error) {
      console.log("error: ", error);
      return res.sendStatus(401);
    }
  }
}

module.exports = new UserController();
