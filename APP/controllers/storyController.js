
// Un controller est un objet qui regroupe les méthodes
// permettant de traiter les différentes requêtes
// prévues dans notre application

const dataMapper = require('../models/dataMapper');

const storyController = {

   async getAllStories(_, res) {
      const result = await dataMapper.getAllPublicStories();
      res.json(result); //pour renvoyer le résultat en format json
   },

   async getOneStory(req, res) {
      const { id } = req.params;
      const oneStory = await dataMapper.getOneSingleStory(id);
      res.json(oneStory); //pour renvoyer le résultat en format json
   },

   async postOneStory(req, res) {
      try{
         const newStory = req.body; // Récupérer l'histoire depuis le corps de la requête
      
         if (!newStory.title) {
         return res.status(400).json({ error: 'Merci d\'introduire un titre' });
         }

         const result = await dataMapper.addStory(newStory); //ajouter la méthode addStory au dataMapper
         res.json(result); // Renvoyer l'histoire ajoutée au client en format json
      } catch (error){
         console.error('Erreur pour ajouter une nouvelle histoire', error);
         res.status(500).json({ error: 'Requête invalide' }); // Réenvoyer une erreur 500 en cas d'erreur
      }
   },

   async updateOneStory(req, res) {
      const { id } = req.params;
      const story = req.body;
      const updateStory = await dataMapper.updateOneSingleStory({ ...story, id }); // on envoie tout ce qui concerne l'histoire mais l'id separémment (1 colis avec 2 cartons)
      res.json(updateStory); 

   },

   async deleteStory(req,res) {
      const { id } = req.params;
      await dataMapper.deleteOneStory(id);
      res.send('Votre histoire vient d\'être supprimée');
   }
};



module.exports = storyController;
