import axios from 'axios';

const TARGET_URL = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken';

export const getAccessToken = (appid: string, corpsecret: string): any => {
  return new Promise((resolve, reject) => {
    axios.get(TARGET_URL, {
      params: {
        corpid: appid,
        corpsecret,
      },
    }).then((res) => {
      resolve(res.data);
    }).catch((e) => {
      reject(e);
    });
  });
};
