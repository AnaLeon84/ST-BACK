const express = require('express');
const superController = require('../controllers/superController');

const router = express.Router();
router.get('/stories', superController.getAllStories);    //Récupérer toutes les histoires publiques 
router.get('/stories/:id', superController.getOneStory);  // Récupérer une histoire spécifique 
/*router.post('/stories', mainController);   //Créer une nouvelle histoire 
router.put('/stories/:id', mainController); // Mettre à jour une histoire existante 
router.delete('/stories/:id', mainController);// Supprimer une histoire 


router.get('/user/:id/my-story', mainController);  //Récupérer toutes les histoires de l'utilisateur connecté 
router.post('/user/:id/favorite', mainController); // Ajouter une histoire à la liste de favoris de l'utilisateur connecté 
router.get('/user/:id/favorite', mainController); //Récupérer la liste des histoires favorites de l'utilisateur connecté 
router.delete('/user/:id/favorite/:id', mainController); //Supprimer une histoire de la liste de favoris de l'utilisateur connecté 
router.put('/user/:id/profil', mainController); // Mettre à jour le compte de l'utilisateur connecté (pseudo et mot de passe)*/ 




module.exports = router;
