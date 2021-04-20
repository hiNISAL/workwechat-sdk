/* eslint-disable */

const WorkWechat = require('../../dist/index').default;
const config = require('../config');
const fs = require('fs');
const path = require('path');

const workWechat = new WorkWechat(config);

const img = fs.createReadStream(path.resolve(__dirname, './test.jpg'));

(async () => {

  const { media_id } = await workWechat.source.upload({
    media: img,
    filename: 'test.jpg',
  });

  workWechat.message.sendImage({
    mediaId: media_id,
    touser: [''],
  });
})();
