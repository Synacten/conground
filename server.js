const Koa = require('koa');
const logger = require('koa-pino-logger');
const helmet = require('koa-helmet');
const cors = require('@koa/cors');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();

app.use(logger({
  prettyPrint: true,
}))
  .use(helmet())
  .use(cors());

app.use(serve(path.join(__dirname, '/public')));
app.use(views(path.join(__dirname, '/views'), {
  extension: 'hbs',
  map: { hbs: 'handlebars' },
  options: {
    partials: {
      header: 'partials/header',
      footer: 'partials/footer',
    },
  },
}));

router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Main page',
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.port || 3300;
app.listen(port);
