/* eslint-disable */

const WorkWechat = require('../../dist/index').default;
const fs = require('fs');
const path = require('path');
const config = require('../config');

const workWechat = new WorkWechat(config);

const img = fs.createReadStream(path.resolve(__dirname, './test.jpg'));

(async () => {
  workWechat.source.upload({
    media: img,
    filename: 'test.jpg',
  }).then((res) => {
    console.log(res);
  });
})();
