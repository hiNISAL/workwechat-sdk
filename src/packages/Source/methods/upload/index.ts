import { AxiosInstance } from 'axios';
import FormData from 'form-data';
import * as mimetype from 'mimetype';
import concat = require('concat-stream');

interface SourceUploadMethodOptions extends SourceUploadOptions {
  request: AxiosInstance,
}

export const upload = (options: SourceUploadMethodOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    const {
      request,
      media,
      filename,
    } = options;

    const fm = new FormData();

    fm.append('media', media, {
      contentType: mimetype.lookup(filename),
      filename,
    });

    fm.pipe(
      concat({ encoding: 'buffer' }, async (data: any) => {
        request
          .post('https://qyapi.weixin.qq.com/cgi-bin/media/upload?type=image', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            withAccessToken: true,
          })
          .then((res) => {
            if (res.status === 200) {
              resolve(res.data);
            } else {
              reject(new Error(data));
            }
          })
          .catch(error => {
            reject(error)
          });
      })
    );
  });
};
