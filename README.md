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

## TS实现（koa-ts）

Koa 类库的几个核心特点 :

- 中间件洋葱圈模型
- context封装
- try catch 错误处理能力


下面我们拆分成四步实现一个简易的Koa框架：

### Step 1 基础Server运行
目标：提供Koa类，支持通过listen启动Server，use添加一个类中间件处理函数
运行：npm run start:1

### Step 2 洋葱圈中间件机制实现
目标：支持use添加多个中间件，并按照洋葱圈模式调用
运行：npm run start:2

### Step 3 context提供
目标：封装request、response，提供context对象贯穿所有中间件调用
运行：npm run start:3

### Step 4 同步错误处理能力
目标：支持错误监听（app.on('error')）,支持通过try catch进行一场捕获
运行：npm run start:4

### Step 5 拆分Request、Response、Context增加实体类
目标：拆分Request、Response、Context增加实体类Context增加Cookie处理能力
运行： npm run start:6

### Step 6 增加Session中间件
目标：增加 session中间件，支持ctx.session操作session数据增加 request 增加 query参数
运行： npm run start:6
