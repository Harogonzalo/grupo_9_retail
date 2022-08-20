const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const userListPath = path.resolve(__dirname, "../data/users.json");
const userList = JSON.parse(fs.readFileSync(userListPath, "utf8"));

const usersController = {
  register: (req, res) => {
    {
      if (req.session.userLoged) {
        console.log("El Register es solo para usuarios")
        res.redirect("/");
      } else {
    
    res.render("users/register");
  }}},

  login: (req, res) => {
    res.render("users/login");
  }, 
  userStore: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let user = req.body;
      user.id = Date.now();      // lo cambie de uuidv4 a datenow ya que datenow son puros numeros
      user.password = bcrypt.hashSync(user.password, 10);
      user.isAdmin = false;
      userList.push(user);

      fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

      res.redirect("/users/login");
    }
  },
  processLogin: (req, res) => {
    const resultValidation = validationResult(req);
    console.log("Llegue a process login")
    if (!resultValidation.isEmpty()) {
      console.log("Errores en la VALIDATION")
      return res.render("users/login", {
        errors: resultValidation.mapped(),
      });
    } else {                                          //se crea el req.session.userLoged
      const userFound = userList.find((user) => {
        if (bcrypt.compareSync(req.body.password, user.password))
          return user.userEmail === req.body.email;
      });

      if (userFound == undefined) {
        res.render("users/login", {
          error: "Usuario no encontrado",
        })
        console.log("No se encontro el usuario")
        ;
      }

      req.session.userLoged = userFound 

      if (req.body.remember_me != undefined) {
        //chequear el timepo de la cookie
        res.cookie(
          "recordame",
          userFound.id
          // { maxAge: 60000 }
        );
      }
      res.redirect("/");
    }
  },
  processLogout: (req, res) => {

  }
};

module.exports = usersController;
