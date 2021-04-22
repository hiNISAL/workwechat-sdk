import { AxiosInstance } from 'axios';
import { preHandlerOptions, getBaseRequestPrams } from './helpers';

interface MessageSendMPNewsMethodOptions extends MessageSendMPNewsOptions {
  request: AxiosInstance;
}

export const sendMPNews = (options: MessageSendMPNewsMethodOptions): any => {
  return new Promise((resolve, reject) => {
    const { request } = options;

    options = preHandlerOptions(options);

    const params = {
      ...getBaseRequestPrams(options),
      msgtype: 'mpnews',
      news: {
        articles: options.articles.map((item) => {
          return {
            title: item.title,
            thumb_media_id: item.thumbMediaId,
            author: item.author,
            content_source_url: item.contentSourceURL,
            content: item.content,
            digest: item.digest,
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
