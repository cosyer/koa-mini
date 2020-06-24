# Koa Mini

实现一个最简版本的 Koa

## Example

测试用例如下：

``` javascript
// Example
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start')
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')
})

app.listen(7000)

// Middleware 1 Start
// Middleware 2 Start
// Middleware 2 End
// Middleware 1 End
```
