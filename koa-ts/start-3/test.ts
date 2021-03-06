import Koa from "./Koa";

const app = new Koa();

app.use(async (context, next) => {
  console.log("middleware 1 start");
  await next();
  console.log("middleware 1 end");
});

app.use(async (context, next) => {
  console.log("middleware 2 start");
  await next();
  console.log("middleware 2 end");
});

app.use(async (context, next) => {
  context.body = "An request come in";
  await next();
});

app.listen(3000, () => {
  console.log("Server listen on port 3000");
});
