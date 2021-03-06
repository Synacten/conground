const Koa = require('koa');
const helmet = require('koa-helmet');
const cors = require('@koa/cors');
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');
const { router } = require('./routes/routes');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  global.console.log(`\x1b[35m${ctx.method}\x1b[0m \x1b[36m${ctx.url}\x1b[0m - ${rt} - \x1b[35m${ctx.response.status}\x1b[0m - \x1b[33mhost\x1b[0m -> \x1b[36m${ctx.headers.host}\x1b[0m \x1b[33muserAgent\x1b[0m -> \x1b[36m${ctx.headers['user-agent']}\x1b[0m`);
})
  .use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  })
  .use(helmet())
  .use(cors());


app.use(serve(path.join(__dirname, '/dist')));
render(app, {
  root: path.join(__dirname, 'dist'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false,
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.port || 3400;
app.listen(port, () => global.console.log(`listen on ${port}`));
