import { AxiosInstance } from 'axios';
import { preHandlerOptions, getBaseRequestPrams } from './helpers';

interface MessageSendMarkdownMethodOptions extends MessageSendMarkdownOptions {
  request: AxiosInstance;
}

export const sendMarkdown = (options: MessageSendMarkdownMethodOptions): any => {
  return new Promise((resolve, reject) => {
    const { request } = options;

    options = preHandlerOptions(options);

    const params = {
      ...getBaseRequestPrams(options),
      msgtype: 'markdown',
      markdown: {
        content: options.content,
      },
      safe: options.safe || 0,
    };

    request.post('https://qyapi.weixin.qq.com/cgi-bin/message/send', params, {
      withAccessToken: true,
    }).then((res) => {
      resolve(res.data);
    }).catch(e => {
      console.log(e);
      reject(e);
    });
  });
};
