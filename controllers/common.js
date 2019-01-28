const root = async (ctx) => {
  await ctx.render('index', {
    pageTitle: 'Главная',
  });
};

const login = async (ctx) => {
  await ctx.render('signin', {
    pageTitle: 'Вход',
  });
};

const auth = async (ctx) => {
  await ctx.render('signup', {
    pageTitle: 'Регистрация',
  });
};

const formData = async (ctx) => {
  console.log(ctx.responce.body);
};

module.exports = {
  root, login, auth, formData,
};
