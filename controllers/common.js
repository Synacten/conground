const root = async (ctx) => {
  await ctx.render('index');
};


module.exports = {
  root,
};
