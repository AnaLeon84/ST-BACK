const client = require('./database');

const dataMapper = {

    async getAllPublicStories(){
        const preparedQuery = 'SELECT * FROM "story"';
        const result = await client.query(preparedQuery);
        return result.rows;
    },

    async getOneSingleStory(id) {
        const preparedQuery = 'SELECT * FROM "story" WHERE id = $1';
        const values = [`${id}`];
        const result = await client.query(preparedQuery, values);
        return result.rows[0];
    }

};

    
module.exports = dataMapper;

