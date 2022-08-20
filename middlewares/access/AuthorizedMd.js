const authMiddleware = (req, res, next) => {
  if (req.session.userLoged) {
    // si estas logueado podes pasar
    next();
  } else {
    // si no estas logueado, vas al login...
    res.redirect("/users/login");
  }
};

module.exports = authMiddleware;

//  un ejemplo:

// si no estas logueado, no podes crear un producto, ni acceder al formulario de carga.
