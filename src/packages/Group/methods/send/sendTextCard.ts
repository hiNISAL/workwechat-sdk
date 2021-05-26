import { AxiosInstance } from 'axios';

interface GroupSendTextCardMethodOptions extends GroupSendTextCardOptions {
  request: AxiosInstance,
}

export const sendTextCard = ({
  chatid,
  request,
  title,
  desc,
  url,
  btntxt,
  safe = 0,
}: GroupSendTextCardMethodOptions) => {
  return new Promise((resolve, reject) => {
    request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
      chatid,
      msgtype: 'textcard',
      textcard: {
        title,
        description: desc,
        url,
        btntxt,
      },
      safe,
    }, {
      withAccessToken: true,
    }).then((res) => {
      console.log(res.data);
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    })
  });
};
