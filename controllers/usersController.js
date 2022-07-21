const usersController = {
    register: (req, res) => {
        res.render('users/register');
    },

    login: (req, res) => {
        res.render('users/login');
    },
    
}

module.exports = usersController;