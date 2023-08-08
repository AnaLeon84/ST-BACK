
const router = require('express').Router();

const mainController = require('./controllers/mainController.js');
const storyController = require('./controllers/storyController.js');

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/story/:id', storyController.story);

// GET /stories : Récupérer toutes les histoires publiques 
// GET /stories/:id : Récupérer une histoire spécifique 
//POST /stories : Créer une nouvelle histoire 
//PUT /stories/:id : Mettre à jour une histoire existante 
//DELETE /stories/:id : Supprimer une histoire 
//GET /user/:id/my-story : Récupérer toutes les histoires de l'utilisateur connecté 
//POST /user/:id/favorite : Ajouter une histoire à la liste de favoris de l'utilisateur connecté 
//GET /user/:id/favorite : Récupérer la liste des histoires favorites de l'utilisateur connecté 
//DELETE /user/:id/favorite/:id : Supprimer une histoire de la liste de favoris de l'utilisateur connecté 
//PUT /user/:id/profil : Mettre à jour le compte de l'utilisateur connecté (pseudo et mot de passe) 


router.use(mainController.notFound);

module.exports = router;
