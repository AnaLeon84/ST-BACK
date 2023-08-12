const { or } = require('sequelize');
const dataMapper = require('../models/dataMapper');

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

    //TODO: corriger
    async postOneUser(req, res) {
        try{
            const newUser = req.body; //récupérer l'user depuis le corps de la requête
            
            // Valider que tous les champs obligatoires soient présents
            if ((!newUser.name || !newUser.email || !newUser.password || !newUser.description)){
                return res.status(400).json({ error: 'Merci de remplir tous les champs' });
            }
            //(newUser.name & newUser.email & newUser.password)){
                return res.status(400).json({ error: 'Merci d\'introduire vos informations' });
            //}
            const result = await dataMapper.addUser(newUser);
            res.json(result);
        } catch (error){
            console.error('Erreur pour créer un nouvel utilisateur', error);
            res.status(500).json({erreur:'Requête invalide'});
        }
    }
}




module.exports = userController