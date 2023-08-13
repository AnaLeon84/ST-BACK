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



};

module.exports = categoryController;