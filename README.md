#### koa 与 Express 的区别
* Express 的中间件是线型的，koa 的中间件是U型的
```
const Koa=require('koa')

const app=new Koa()

app.use(async (ctx,next)=>{
    ctx.body='hello'
    await next()
    ctx.body+='welcome back'
})

app.use(async (ctx)=>{
    ctx.body+='world'
})

app.listen(3000)
```
```
helloworldwelcome back
```
* Express 使用 next 回调函数，koa 使用 generator 语法