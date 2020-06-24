const Koa = require("./index");

const app = new Koa();

const port = process.env.PORT || 7000;

app.use(async (ctx, next) => {
  console.log("Middleware 1 Start");
  await next();
  console.log("Middleware 1 End");
});

app.use(async (ctx, next) => {
  console.log("Middleware 2 Start");
  await next();
  console.log("Middleware 2 End");

  ctx.body = "hello, world";
});

app.listen(7000, function () {
  console.log("Listening on port " + port);
});
