import { AxiosInstance } from 'axios';

interface GroupSendMarkdownMethodOptions extends GroupSendMarkdownOptions {
  request: AxiosInstance,
}

export const sendMarkdown = ({
  chatid,
  safe = 0,
  content,
  request,
}: GroupSendMarkdownMethodOptions) => {
  return new Promise((resolve, reject) => {
    request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
      chatid,
      safe,
      markdown: {
        content,
      },
      msgtype: 'markdown',
    }, {
      withAccessToken: true,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    })
  });
};
