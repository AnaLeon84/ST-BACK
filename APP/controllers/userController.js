
const dataMapper = require('../models/dataMapper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const userController = {

    async getAllUsers(_,res) {
        const result = await dataMapper.getUsers();
        res.json(result);
    },

    async getOneUser(req, res) {
        const { id } = req.params;
        const oneUser = await dataMapper.getOneSingleUser(id);
        res.json(oneUser);
    },


    async postOneUser(req, res) {
        try{
            const {
                name, email, password, description,
            } = req.body; //récupérer l'user depuis le corps de la requête
            
            // Je vérifie que l'email fourni est sous une forme valide

             // Valider que tous les champs obligatoires soient présents
             if ((!name || !email || !password)){
                return res.status(400).json({ error: 'Merci de remplir tous les champs' });
            }
          
            if (!emailValidator.validate(email)) {

                //Si ce n'est pas le cas j'envoie un message à l'utilisateur

                return res.status(400).send({ error: 'Merci de renseigner un email valide' });
            }

            // Je vérifie qu'un mot de passe est bien présent et qu'il fait au moins 12 caractères

            if (password.length < 12) {

                //Si la condition n'est pas remplie alors j'envoie un message à l'utilisateur

                res.status(400).send({ message: 'Le mot de passe doit faire au moins 12 caractères' });
                return;
            }
            
            // Si tout est ok je crée un grain de sel selon les paramètres issus de notre fichier .env
            
            const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

            // Je crée le cryptage du mot de passe avec la fonctoin 'hash' du module 'bcrypt'
            // Je lui donne en argument le mot de passe de m'utilisateur et le grain de sel aléatoire.

            const encryptedPassword  = await bcrypt.hash(password, saltRounds);

            // Je crée ma variable 'result' qui va faire appel à la méthode 'addUser'du datamapper correspondant
            // Je lui transmets les données récupérées précedemment dans le body du front
            // Le mot de passe sera celui qui aura été préalablement crypté et non celui d'origine
            // La variable 'result' qui stocke le résultat de la requête

            
            const result = await dataMapper.addUser({ 
                name,
                email,
                password: encryptedPassword,
                description,
            });
            // Je retourne le 'result' créé dans la base de données

            res.json(result);
           
        } catch (error){
            console.error('Erreur pour créer un nouvel utilisateur', error);
            res.status(500).json({ erreur:'Requête invalide'});
        }
    },

    
    async updateOneUser(req, res) {
        const { id } = req.params;
        const {
            name, email, password, description,
        } = req.body;
    
        if (!emailValidator.validate(email)) {

            //Si ce n'est pas le cas j'envoie un message à l'utilisateur

            return res.status(400).send({ error: 'Merci de renseigner un email valide' });
        }

         // Valider que tous les champs obligatoires soient présents
         if ((!name || !email || !password)){
            return res.status(400).json({ error: 'Merci de remplir tous les champs' });
        }
      
        if (!emailValidator.validate(email)) {

            //Si ce n'est pas le cas j'envoie un message à l'utilisateur

            return res.status(400).send({ error: 'Merci de renseigner un email valide' });
        }

        // Je vérifie qu'un mot de passe est bien présent et qu'il fait au moins 12 caractères

        if (password.length < 12) {

            //Si la condition n'est pas remplie alors j'envoie un message à l'utilisateur

            res.status(400).send({ message: 'Le mot de passe doit faire au moins 12 caractères' });
            return;
        }
        
        // Si tout est ok je crée un grain de sel selon les paramètres issus de notre fichier .env
        
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

        // Je crée le cryptage du mot de passe avec la fonctoin 'hash' du module 'bcrypt'
        // Je lui donne en argument le mot de passe de m'utilisateur et le grain de sel aléatoire.

        const encryptedPassword  = await bcrypt.hash(password, saltRounds);

        const result = await dataMapper.updateOneSingleUser({ 
            name,
            email,
            password: encryptedPassword,
            description,
            id,
        });

        res.json(result);
    
    },

    async deleteUser(req,res) {
        const { id } = req.params;
        await dataMapper.deleteOneUser(id);
        res.send('Votre compte vient d\'être supprimé');
    },


    async getAllUserStories(req, res) {
        const { id } = req.params;
        const oneUser = await dataMapper.getUserStories(id);
        res.json(oneUser);
    },

    /*async updateUserProfile(req, res) {
        const { id } = req.params;
        const user = req.body;

        const updateProfile = await dataMapper.updateOneProfile({ ...user, id });

        res.json(updateProfile);
    }*/
        
    
};




module.exports = userController