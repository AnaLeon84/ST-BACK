
const router = require('express').Router();

const mainController = require('./controllers/mainController.js');
const storyController = require('./controllers/storyController.js');

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/story/:id', storyController.story);

router.use(mainController.notFound);

module.exports = router;
