import { AxiosInstance } from 'axios';

interface GroupCreateMethodOptions extends GroupCreateOptions {
  request: AxiosInstance;
}

export const create = ({
  request,
  name,
  owner,
  userlist,
  chatid,
}: GroupCreateMethodOptions) => {
  return new Promise((resolve, reject) => {
    request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/create', {
      name,
      owner,
      userlist,
      chatid,
    }, {
      withAccessToken: true,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
};
