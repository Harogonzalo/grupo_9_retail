const adminAccess = (req, res, next) => {
  if (req.session.userLoged.isAdmin == true) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = adminAccess;
