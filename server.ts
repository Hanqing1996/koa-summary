const Koa=require('koa')

const app=new Koa()

app.use(async (ctx,next)=>{

    console.log(ctx.req);
    ctx.body='hello'
    await next()
    ctx.body+='welcome back'
})

app.use(async (ctx)=>{
    ctx.body+='world'
})

app.listen(3000)
