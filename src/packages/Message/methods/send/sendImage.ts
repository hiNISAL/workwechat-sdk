import { AxiosInstance } from 'axios';
import { preHandlerOptions, getBaseRequestPrams } from './helpers';

interface MessageSendImageMethodOptions extends MessageSendImageOptions {
  request: AxiosInstance;
}

export const sendImage = (options: MessageSendImageMethodOptions): any => {
  return new Promise((resolve, reject) => {
    const { request } = options;

    options = preHandlerOptions(options);

    const params = {
      ...getBaseRequestPrams(options),
      msgtype: 'image',
      image: {
        media_id: options.mediaId,
      },
      safe: options.safe || 0,
    };
    console.log(params);
    request.post('https://qyapi.weixin.qq.com/cgi-bin/message/send', params, {
      withAccessToken: true,
    }).then((res) => {
      // console.log(res);
      resolve(res.data);
    }).catch(e => {
      console.log(e);
      reject(e);
    });
  });
};
