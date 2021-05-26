export const API = (
  path: string,
  withAccessToken = true,
  prefix = 'https://qyapi.weixin.qq.com/cgi-bin',
  method = 'GET',
) => {
  return (clazz: any, name: string, desc: any) => {
    const fn = clazz[name];
    method = method.toLocaleLowerCase();

    desc.value = async function (...args: any) {
      const res = (await fn(...args)) || {};

      if (method === 'get') {
        return (await this.request.get(`${prefix}${path}`, {
          params: res,
          withAccessToken,
        })).data;
      } else {
        return (await this.request.post(`${prefix}${path}`, res, {
          withAccessToken,
        })).data;
      }
    }
  };
};

export const APIPost = (
  path: string,
  withAccessToken = true,
  prefix = 'https://qyapi.weixin.qq.com/cgi-bin',
) => {
  return API(path, withAccessToken, prefix, 'POST');
};
