# workwechat-sdk

> 项目开发中

企业微信自建应用 SDK。

只需要群机器人的能力可以使用 [workwechat-bot](https://www.npmjs.com/package/workwechat-bot) 包。

## 安装

```shell
npm i workwechat-sdk -S
```

## 使用

```js
const WorkWechat = require('workwechat-sdk');

const workwechat = new WorkWechat({
  // 企业id
  corpId: '',
  // 应用的secret
  corpSecret: '',
  // 企业微信应用id
  agentId: '',

  // 接收消息用的配置
  encodingAESKey: '',
  // 接收消息用的配置
  appToken: '',
});

workWechat.message.sendMessage({
  touser: ['User1'],
  content: '我是通过api发送的消息',
});
```

## API

### message

#### sendText

发送文本给成员。

```js
workwechat.message.sendText({
  touser?: string[]|string;
  toparty?: string[]|string;
  totag?: string[]|string;
  agentid?: number|string;
  safe?: 1|0;
  content: string|number;
});
```

#### sendImage

发送图片给成员。

mediaId 通过 `source.upload` 可以获得。

```js
workwechat.message.sendImage({
  touser?: string[]|string;
  toparty?: string[]|string;
  totag?: string[]|string;
  agentid?: number|string;
  safe?: 1|0;
  mediaId: string;
});
```

#### receiveMsgVerify

企业微信推送过来的校验接口的校验方法.

当在企业微信后台配置接收消息相关内容并保存信息的时候会产生校验请求。

这个请求会请求到配置的服务中，然后需要对请求上的一些参数进行解码，并将解码结果作为响应。

如果能正常响应，则为校验通过，可以保存设置。

本方法就用于校验相关工作。

可以配合 utils.getReceiveMsgVerifyParamsFromQuery 使用。

```js
workwechat.message.receiveMsgVerify({
  msgSignature: string;
  echostr: string;
  timestamp: string;
  nonce: string;
});
```

#### receiveMsgDecode

消息接收解密方法。

当配置好消息接收api后，企业微信就会向配置的接口推送消息，推送来的消息需要进行解密。

可以配合 utils.getReceiveMsgDecodeParamsFromQuery 使用。

```js
workwechat.message.receiveMsgDecode({
  msgSignature: string;
  timestamp: string;
  nonce: string;
  // 起企业微信发过来的请求的 body 部分
  originXML: string;
});
```

#### createReceiveMsgResBody

当企业微信推送用户向应用发送的消息到服务端时，可以对企业微信的推送请求进行响应，响应就是直接发送消息到对应用户。

但该接口对响应的格式有一定要求，本方法用于生成相关格式。

```js
workwechat.message.createReceiveMsgResBody(
  // 通过 receiveMsgDecode 解码后可以得到
  fromUsername: string,
  // 通过 receiveMsgDecode 解码后可以得到
  toUsername: string,
  // 推送内容
  content: string,
);
```

### source

```js
type UploadMediaType = 'image'|'voice'|'video'|'file';
```

#### upload

```js
workwechat.source.upload({
  filename: string;
  // 暂时是文件流
  media: any;
  type: UploadMediaType;
});
```

#### uploadImage

```js
workwechat.source.uploadImage({
  filename: string;
  // 暂时是文件流
  media: any;
});
```

#### uploadVideo

```js
workwechat.source.uploadVideo({
  filename: string;
  // 暂时是文件流
  media: any;
});
```

#### uploadFile

```js
workwechat.source.uploadFile({
  filename: string;
  // 暂时是文件流
  media: any;
});
```

#### uploadVoice

```js
workwechat.source.uploadVoice({
  filename: string;
  // 暂时是文件流
  media: any;
});
```

### token

> 下面所有 token 都指 AccessToken

SDK 内部有一套 token 机制。

当调用一个 api 时，会自动检测 token，如果没有 token 或者 token 过期，会自动去获取 token，并重新调用该 api。

#### isAccessTokenOverTime

检测token是否超时。

```js
workwechat.token.isAccessTokenOverTime()
```

#### getAccessToken

申请一个 token

```js
workwechat.token.getAccessToken()
```

### group

#### create

创建群聊。

```js
workwechat.group.create({
  name?: string;
  owner?: string;
  userlist: string[];
  chatid?: string;
});
```

#### sendText

向群聊推送文本消息。

```js
workwechat.group.sendText({
  safe?: 0|1;
  content: string;
  chatid: string;
});
```

### utils

#### getReceiveMsgVerifyParamsFromQuery

当在后台配置了接收消息的接口后，企业微信会发送校验接口过来。

校验接口需要处理一些解码相关操作，对应到 sdk 中的 message.receiveMsgVerify 方法。

本方法提供了解码方法需要的一些参数，直接从query中取。

``` js
const verifyOptions = workWechat.utils.getReceiveMsgVerifyParamsFromQuery(request.query);
// verify 可以直接作为响应
const verify = workWechat.message.receiveMsgVerify(verifyOptions);
```

#### getReceiveMsgDecodeParamsFromQuery


当自建应用开启了消息推送，并通过校验后，会推送消息到配置的接口上。

这里可以用于获取 sdk 对应解码接口（message.receiveMsgDecode）需要的参数。

还有一个参数( originXML )需要从 body 取。

``` js
const decodeOptions = workWechat.utils.getReceiveMsgDecodeParamsFromQuery(ctx.query);
const message = await workWechat.message.receiveMsgDecode({
  ...decodeOptions,
  originXML: request.body,
});
```

### department

### list

获取部门列表。

```js
workwechat.department.list();
```

### users

获取部门下的用户。

```js
// dep 是 department 的别名
workwechat.dep.users(
  depId, // 部门id
  fetchChild, // 是否递归获取子部门成员
);
```

## checkin

## user
