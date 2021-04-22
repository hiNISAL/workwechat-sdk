import { AxiosInstance } from 'axios';
import { preHandlerOptions, getBaseRequestPrams } from './helpers';

interface MessageSendNewsMethodOptions extends MessageSendNewsOptions {
  request: AxiosInstance;
}

export const sendNews = (options: MessageSendNewsMethodOptions): any => {
  return new Promise((resolve, reject) => {
    const { request } = options;

    options = preHandlerOptions(options);

    const params = {
      ...getBaseRequestPrams(options),
      msgtype: 'news',
      news: {
        articles: options.articles.map((item) => {
          return {
            title: item.title,
            description: item.desc,
            url: item.url,
            picurl: item.picurl,
          };
        }),
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
