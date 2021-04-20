const WorkWechat = require('../../dist/index').default;
const config = require('../config');

const workWechat = new WorkWechat(config);

(async () => {
  try {
    const res = await workWechat.message.sendText({
      touser: [''],
      content: '',
    })

    console.log(res);
  } catch(e) {
    console.error(e);
  }
})();
