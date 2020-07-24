const http = require("http");
function compose(middlewares) {
  return (ctx) => {
    const dispatch = (i) => {
      const middleware = middlewares[i];
      if (i === middlewares.length) {
        return;
      }
      return middleware(ctx, () => dispatch(i + 1));
    };
    return dispatch(0);
  };
}

class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
}
class Koa {
  constructor() {
    this.middlewares = [];
  }
  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
  callback() {
    return async (req, res) => {
      const ctx = new Context(req, res);
      const fn = compose(this.middlewares);
      try {
        await fn(ctx);
      } catch (e) {
        console.error(e);
        ctx.res.statusCode = 500;
        ctx.res.end("Internel Server Error");
        // 没有数据end返回 有数据 res.send() res.status().json({})
      }
      ctx.res.end(ctx.body);
    };
  }
  use(middleware) {
    this.middlewares.push(middleware);
    return this; // 方便链式调用
  }
}
module.exports = Koa;
