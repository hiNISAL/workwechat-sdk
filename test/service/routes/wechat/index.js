const config = require('../../project.config');
const WorkWechat = require('../../../../dist/src/index').default;

const workWechat = new WorkWechat({
  corpId: config.appid,
  appToken: config.token,
  encodingAESKey: config.encodingAESKey,
  corpSecret: config.appSecret,
});

// -------------------------------------------------------------------------------

const Router = require('koa-router');

const router = new Router({
  prefix: '/workwechat',
});

router.get('/msg/push', async (ctx) => {
  const req = ctx.request;

  const verifyOptions = workWechat.utils.getReceiveMsgVerifyParamsFromQuery(req.query);

  const verify = workWechat.message.receiveMsgVerify(verifyOptions);

  ctx.body = verify;
});

router.post('/msg/push', async (ctx) => {
  const req = ctx.request;

  const decodeOptions = workWechat.utils.getReceiveMsgDecodeParamsFromQuery(ctx.query);

  const message = await workWechat.message.receiveMsgDecode({
    ...decodeOptions,

    originXML: req.body,
  });

  const msgType = message.MsgType;
  const fromUsername = message.ToUserName;
  const toUsername = message.FromUserName;

  console.log(msgType, fromUsername, toUsername)
  console.log('-----------------------------------------------------------------');
  console.log(message);

  switch (msgType) {
    case 'text':
      console.log('is text');
      const sendContent = workWechat.message.createReceiveMsgResBody(
        fromUsername, toUsername, `hi~${message.FromUserName}`,
      );

      ctx.status = 200;

      ctx.body = sendContent;

      break;
    case 'image':
      break;
    case 'video':
      break;
    case 'voice':
      break;
    case 'location':
      break;
    case 'link':
      break;
    case 'event':
      var event = message.Event;
      ctx.body = workWechat.message.createReceiveMsgResBody(fromUsername, toUsername, 'hi~');
      console.log(event);
      break;
  }
});

module.exports = router
