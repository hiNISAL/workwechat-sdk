const Koa = require('Koa');
const KoaBody = require('koa-body');
const workWechatRouter = require('./routes/wechat');

const app = new Koa();

app.use(KoaBody());

app.use(workWechatRouter.routes());
app.use(workWechatRouter.allowedMethods());

app.listen(80);
