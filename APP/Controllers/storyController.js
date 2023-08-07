const storiesJson = require('../stories.json');
const storyController = {
    story: function(request, response) {
         const idStory = request.params.id;

        const foundStory = storiesJson.find((story) => {
            return story.id === idStory;
        });

        if (foundStory !== undefined) {
            response.render('story', {
                story: foundStory
            });
        } else {
            response.status = 404;
            response.render('404');

        }
    }
};

module.exports = storyController;
