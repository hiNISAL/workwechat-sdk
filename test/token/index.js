const WorkWechat = require('../../dist/src/index').default;
const config = require('../config');

const workWechat = new WorkWechat(config);

(async () => {
  const res = await workWechat.token.getAccessToken();

  console.log(res);
})();
