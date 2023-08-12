const express = require('express');
const storyController = require('../controllers/storyController');
const userController = require('../controllers/userController');

const router = express.Router();
router.get('/stories', storyController.getAllStories);    //Récupérer toutes les histoires publiques 
router.get('/stories/:id', storyController.getOneStory);  // Récupérer une histoire spécifique 
router.post('/stories', storyController.postOneStory);   //Créer une nouvelle histoire 
router.put('/stories/:id', storyController.updateOneStory); // Mettre à jour une histoire existante 
router.delete('/stories/:id', storyController.deleteStory);// Supprimer une histoire 



router.get('/users', userController.getAllUsers); //Récupérer tous les utilisateurs
router.get('/users/:id', userController.getOneUser); //Récupérer un utilisateur
//TODO: corriger 
//router.post('/users', userController.postOneUser); //Créer un nouveau utilisateur

//TODO: corriger
//router.put('/users/:id', userController.updateOneUSer); //mettre à jour un user


router.delete('/users/:id', userController.deleteUser); //Supprimer un user
router.get('/users/:id/my-story', userController.getAllUserStories);  //Récupérer toutes les histoires de l'utilisateur connecté 
/*router.post('/user/:id/favorite', mainController); // Ajouter une histoire à la liste de favoris de l'utilisateur connecté 
router.get('/user/:id/favorite', mainController); //Récupérer la liste des histoires favorites de l'utilisateur connecté 
router.delete('/user/:id/favorite/:id', mainController); //Supprimer une histoire de la liste de favoris de l'utilisateur connecté 
router.put('/user/:id/profil', mainController); // Mettre à jour le compte de l'utilisateur connecté (pseudo et mot de passe)*/ 




module.exports = router;
