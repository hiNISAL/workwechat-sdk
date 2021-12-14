interface APIPostOptions {
  withAccessToken?: boolean,
  withAgentId?: boolean,
  prefix?: string;
}
interface APIOptions extends APIPostOptions {
  method?: string;
}

export const API = (
  path: string,
  {
    withAccessToken = true,
    withAgentId = false,
    prefix = 'https://qyapi.weixin.qq.com/cgi-bin',
    method = 'GET',
  }: APIOptions = {},
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
          withAgentId,
        })).data;
      } else {
        return (await this.request.post(`${prefix}${path}`, res, {
          withAccessToken,
          withAgentId,
        })).data;
      }
    }
  };
};

export const APIPost = (
  path: string,
  {
    withAccessToken = true,
    prefix = 'https://qyapi.weixin.qq.com/cgi-bin',
    withAgentId = false,
  }: APIPostOptions = {},
) => {
  return API(path, {
    withAccessToken,
    withAgentId,
    prefix,
    method: 'POST',
  });
};
