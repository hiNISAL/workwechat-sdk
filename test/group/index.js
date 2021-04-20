const WorkWechat = require('../../dist/index').default;
const config = require('../config');

const workWechat = new WorkWechat(config);

(async () => {
  const group = await workWechat.group.create({
    name: 'api创建的群聊 陈老板群主',
    userlist: [],
    owner: '',
  });

  console.log(group.chatid);

  await workWechat.group.sendText({
    chatid: group.chatid,
    content: '欢迎消息',
  })
})();
