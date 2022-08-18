const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const userListPath = path.resolve(__dirname, "../data/users.json");
const userList = JSON.parse(fs.readFileSync(userListPath, "utf8"));

const usersController = {
  register: (req, res) => {
    res.render("users/register");
  },

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
      user.id = uuidv4();
      user.level = "user";
      userList.push(user);

      fs.writeFileSync(userListPath, JSON.stringify(userList, null, 2));

      res.redirect("/index");
    }
  },
  processLogin: (req, res) => {
    const resultValidation = validationResult(req);

    if (!resultValidation.isEmpty()) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
      });
    } else {
      const userFound = users.find((user) => {
        if (bcrypt.compareSync(req.body.password, user.password))
          return user.userEmail === req.body.email;
      });

      if (userFound == undefined) {
        res.render("users/login", {
          error: "Usuario no encontrado",
        });
      }

      req.session.userLoged = userFound;

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
};

module.exports = usersController;
