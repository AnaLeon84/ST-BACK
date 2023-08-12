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
    },

    async addStory(story) {
        const preparedQuery = `INSERT INTO "story" ("title","resume", "content", "category_id", "user_id") VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [story.title, story.resume, story.content, story.category_id, story.user_id];
        const result = await client.query(preparedQuery, values);
        return result.rows[0];
    },
    
    async updateOneSingleStory(story) {
        const preparedQuery = `
            UPDATE "story"
            SET 
            "title" = $1, 
            "resume" = $2, 
            "content" = $3, 
            "category_id" = $4, 
            "user_id" = $5,
            "updated_at" = NOW()
            WHERE "id" = $6 RETURNING *`;

        const values = [
            story.title,
            story.resume,
            story.content,
            story.category_id,
            story.user_id,
            story.id,
        ];
        
        const result = await client.query(preparedQuery, values);

        return result.rows[0];
    },

    async deleteOneStory(id) {
        const preparedQuery = 'DELETE FROM "story" WHERE "id" = $1';
        const values = [`${id}`];
        const result = await client.query(preparedQuery, values);
        return (result.rowCount === 1);
    }
};

    
module.exports = dataMapper;

