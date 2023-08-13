const dataMapper = require('../models/dataMapper');

const categoryController = {

    async getAllCategories(_,res) {
        const result = await dataMapper.getAllPublicCategories();
        res.json(result);
    },

    async getOneCategory(req,res) {
        const { id } = req.params;
        const oneCategory = await dataMapper.getOneSingleCategory(id);
        res.json(oneCategory);
    },

    async postOneCategory(req, res) {
        try{
            const newCategory = req.body; //récupérer la catégorie depuis le corps de la requête
            const result = await dataMapper.addCategory(newCategory);
            res.json(result);
        } catch (error){
            console.error('Erreur pour créer une nouvelle catégorie', error);
            res.status(500).json({ erreur:'Requête invalide'});
        }
    },


    async updateOneCategory(req, res) {
        const { id } = req.params;
        const category = req.body;
        const updateCategory = await dataMapper.updateOneSingleCategory({ ...category, id  });
        res.json(updateCategory);
    
    },

    
};

module.exports = categoryController;