import { AxiosInstance } from 'axios';

interface UserInfoMethodOptions extends UserInfoOptions {
  request: AxiosInstance;
}

export const info = (options: UserInfoMethodOptions) => {
  const {
    userId,
    request,
  } = options;

  return new Promise((resolve, reject) => {
    request.get(`https://qyapi.weixin.qq.com/cgi-bin/user/get?userid=${userId}`, {
      withAccessToken: true,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  })
};
