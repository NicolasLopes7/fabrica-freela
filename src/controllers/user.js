const userServices = require("../services/user")
const HTTPError = require("../helpers/HTTPError");


const userControllers = {
  async create(req, res) {
    const { login, password, role } = req.body;

    if(!login || !password || !role){
      res.status(400);
      return res.json({
        error: {
          message: "missing params",
          required: {
           params: ["login", "password", "role"]
          }
        }
    })
  }


  try {
    const user = await userServices.create(login, password, role);
    return res.json({ user });

  } catch (error) {
    res.status(500);
    if(error.code == 23505){
      return res.json({ error: "não pode existir mais de um usuario com o mesmo login"})
    }
    return res.json(HTTPError(error));
    }
  },

  async delete(req,res){
    const {userId} = req.params
    
    await userServices.delete(userId)

    return res.sendStatus(200)
    },

  async update(req, res) {
    const {userId} = req.params
    let {password} = req.body
    
    password = password.trim()
    
    if(password.trim().length == 0){
      return res.json({ error: "o campo de nova senha deve estar preenchido"})
    }
    
    else{
      await userServices.update(userId, password)

      return res.sendStatus(200)
      }
    }
  };


module.exports = userControllers