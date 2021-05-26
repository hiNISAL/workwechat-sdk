const WorkWechat = require('../../dist/index').default;
const config = require('../config');

const workWechat = new WorkWechat(config);

(async () => {
  const users = await workWechat.dep.users();
  const list = users.userlist.map((item) => item.userid);
  console.log(list);
  const res = await workWechat.checkin.getDataMonth({
    useridlist: list,
    starttime: 1621468800,
    endtime: 1622073600,
  });

  console.log(res);
})();
