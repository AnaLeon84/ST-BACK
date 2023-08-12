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
    }
}




module.exports = userController