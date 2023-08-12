
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
    /*async postOneUser(req, res) {
        try{
            const newUser = req.body; //récupérer l'user depuis le corps de la requête
            
            // Valider que tous les champs obligatoires soient présents
            if ((!newUser.name || !newUser.email || !newUser.password || !newUser.description)){
                return res.status(400).json({ error: 'Merci de remplir tous les champs' });
            }
          
            const result = await dataMapper.addUser(newUser);
            res.json(result);
        } catch (error){
            console.error('Erreur pour créer un nouvel utilisateur', error);
            res.status(500).json({ erreur:'Requête invalide'});
        }
    },

    //TODO: corriger
    async updateOneUser(req, res) {
        try {
            const { id } = req.params;
            const user = req.body;
    
            const updatedUser = await dataMapper.updateOneSingleUser({ ...user, id });
    
            // Verifier si l'user a bien été modifié

            if (updatedUser) {
                return res.status(200).json(updatedUser);
            } else {
                return res.status(404).json({ message: 'Utilisateur non trouvé ou non actualisé' });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Requête invalide' });
        }
    },*/

    async deleteUser(req,res) {
        const { id } = req.params;
        await dataMapper.deleteOneUser(id);
        res.send('Votre compte vient d\'être supprimé');
    }

};




module.exports = userController