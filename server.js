const Koa = require('koa');

const app = new Koa();
const logger = require('koa-pino-logger');
const helmet = require('koa-helmet');
const cors = require('@koa/cors');

app.use(logger({
  prettyPrint: true,
  colorize: true,
}))
  .use(helmet())
  .use(cors());

app.use(async (ctx) => {
  ctx.body = 'hi';
});

const port = process.env.port || 3300;
app.listen(port);
