const root = async (ctx) => {
  await ctx.render('index', {
    pageTitle: 'Main page',
  });
};

const login = async (ctx) => {
  ctx.body = {
    login: 'ok',
  };
};

module.exports = {
  root, login,
};
