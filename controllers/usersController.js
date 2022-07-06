const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },



    login: (req, res) => {
         res.render('users/login');
    },



    editProduct: (req, res) => {
        res.render('users/editProduct');
    },
}

module.exports = usersController;