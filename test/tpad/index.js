/* eslint-disable */
const axios = require('axios');
const config = require('./config')

const TOKEN = (Buffer.from(`${config.account}:${config.token}`)).toString('base64');

axios.defaults.headers['Authorization'] = `Basic ${TOKEN}`;

axios.post('https://api.tapd.cn/bugs', {
  title: 'api添加的缺陷 带图片测试2',
  workspace_id: '',
  reporter: '',
  description: '<p>1233</p><img src="https://ncstatic.clewm.net/rsrc/2021/0418/21/dd7e23f66b939cac6c7d118fd0c20681.jpg" />'
}).then((res) => {
  console.log(res);
});
