const root = async (ctx) => {
  await ctx.render('index', {
    title: 'Main page',
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
