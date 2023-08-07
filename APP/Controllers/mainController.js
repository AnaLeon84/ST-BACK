const mainController = {
    home: function(request, response) {
        response.render('index');
    },
    login: function(request, response) {
        response.render('login');
    }
};

module.exports = mainController;
