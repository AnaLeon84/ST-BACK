// Un controller est un objet qui regroupe les méthodes
// permettant de traiter les différentes requêtes
// prévues dans notre application
const mainController = {
    home: (req, res) => {
  
      console.log(req.session);
      res.render('main/home');
  
    },
    notFound: (req, res) => {
      res.status(404).render('main/notFound');
    },
  };
  
  module.exports = mainController;
