import { AxiosInstance } from 'axios';
import { preHandlerOptions, getBaseRequestPrams } from './helpers';

interface MessageSendTextCardMethodOptions extends MessageSendTextCardOptions {
  request: AxiosInstance;
}

export const sendTextCard = (options: MessageSendTextCardMethodOptions): any => {
  return new Promise((resolve, reject) => {
    const { request } = options;

    options = preHandlerOptions(options);

    const params = {
      ...getBaseRequestPrams(options),
      msgtype: 'textcard',
      textcard: {
        title: options.title,
        description: options.desc,
        url: options.url,
        btntxt: options.btntxt,
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
