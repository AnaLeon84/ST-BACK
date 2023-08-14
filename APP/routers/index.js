const express = require('express');

const storyController = require('../controllers/storyController');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController.js');
const authController = require('../controllers/authController.js');

const isLogged = require('../middlewares/isLogged');
const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validation/validate');
const { post: authPostSchema } = require('../validation/schema/auth.schema');


const { post: userPostSchema, put: userPutSchema } = require('../validation/schema/user.schema');

const router = express.Router();
router.get('/stories', controllerHandler(storyController.getAllStories));    //Récupérer toutes les histoires publiques 
router.get('/stories/:id', controllerHandler(storyController.getOneStory));  // Récupérer une histoire spécifique 
router.post('/stories', isLogged, controllerHandler(storyController.postOneStory));   //Créer une nouvelle histoire 
router.put('/stories/:id', isLogged, controllerHandler(storyController.updateOneStory)); // Mettre à jour une histoire existante 
router.delete('/stories/:id', isLogged, controllerHandler(storyController.deleteStory));// Supprimer une histoire 


//USER
router.get('/users', controllerHandler(userController.getAllUsers)); //Récupérer tous les utilisateurs
router.get('/users/:id', userController.getOneUser); //Récupérer un utilisateur
router.post('/users', validate(userPostSchema, 'body'), controllerHandler(userController.postOneUser)); //Créer un nouveau utilisateur
router.put('/users/:id', isLogged, validate(userPutSchema, 'body'), controllerHandler(userController.updateOneUser)); //mettre à jour un user


router.delete('/users/:id', isLogged, controllerHandler(userController.deleteUser)); //Supprimer un user
router.get('/users/:id/my-story', isLogged, controllerHandler(userController.getAllUserStories));  //Récupérer toutes les histoires de l'utilisateur connecté 
/*router.put('/user/:id/profil', userController.updateUserProfile); // Mettre à jour le compte de l'utilisateur connecté (pseudo et mot de passe)*/ 

//CATEGORY
router.get('/categories', controllerHandler(categoryController.getAllCategories)); //Récupérer toutes les catégories*/
router.get('/categories/:id', controllerHandler(categoryController.getOneCategory));// Récupérer une catégorie
router.post('/categories', isLogged, controllerHandler(categoryController.postOneCategory)); // Créer une nouvelle catégorie
router.put('/categories/:id', isLogged, controllerHandler(categoryController.updateOneCategory));


//AUTHENTICATION

router.post('/auth', validate(authPostSchema, 'body'), controllerHandler(authController.login));



// FAVORIS

/*router.post('/user/:id/favorite', mainController); // Ajouter une histoire à la liste de favoris de l'utilisateur connecté 
router.get('/user/:id/favorite', mainController); //Récupérer la liste des histoires favorites de l'utilisateur connecté 
router.delete('/user/:id/favorite/:id', mainController); //Supprimer une histoire de la liste de favoris de l'utilisateur connecté */


module.exports = router;
