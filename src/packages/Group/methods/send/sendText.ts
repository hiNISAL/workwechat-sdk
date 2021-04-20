import { AxiosInstance } from 'axios';

interface GroupSendTextMethodOptions extends GroupSendTextOptions {
  request: AxiosInstance,
}

export const sendText = ({
  chatid,
  content,
  safe,
  request,
}: GroupSendTextMethodOptions) => {
  return new Promise((resolve, reject) => {
    request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
      chatid,
      text: {
        content,
      },
      safe,
      msgtype: 'text',
    }, {
      withAccessToken: true,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    })
  });
};
