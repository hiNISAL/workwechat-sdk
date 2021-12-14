const WorkWechat = require('../../dist/index').default;
const config = require('../config');

const workWechat = new WorkWechat(config);

(async () => {
  const res = await workWechat.app.createMenu();

  console.log(res);
})();
