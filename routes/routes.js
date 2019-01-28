const Router = require('koa-router');
const common = require('../controllers/common');

const router = new Router();

router.get('/', common.root);
router.get('/signin', common.login);
router.get('/signup', common.auth);
router.post('/signup', common.formData);

module.exports = {
  router,
};
