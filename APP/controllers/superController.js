
// Un controller est un objet qui regroupe les méthodes
// permettant de traiter les différentes requêtes
// prévues dans notre application

const dataMapper = require('../models/dataMapper');

const superController = {

 async getAllStories(_, res) {
    const result = await dataMapper.getAllPublicStories();
    res.json(result); //pour renvoyer le résultat en format json
 },
};


module.exports = superController;
