const Koa = require('koa');
const helmet = require('koa-helmet');
const cors = require('@koa/cors');
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');
const { router } = require('./routes/routes');

const app = new Koa();

app
  .use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    global.console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  })
  .use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  })
  .use(helmet())
  .use(cors());

function status() {
  if (process.env === 'production') {
    return 'dist';
  }
  return 'src';
}

app.use(serve(path.join(__dirname, '/dist')));
render(app, {
  root: path.join(__dirname, status()),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false,
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.port || 3405;
app.listen(port, () => global.console.log(`listen on ${port}`));
