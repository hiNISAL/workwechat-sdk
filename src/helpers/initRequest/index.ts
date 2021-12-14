import SDK from '../..';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const ACCESS_TOKEN_EXPIRED_CODE = 42001;
const APPLY_ACCESS_TOKEN_MAX_TIME = 10;

export default (sdk: SDK) => {
  const request = sdk.__request;

  let applyTokenTime = 0;

  request.interceptors.request.use(async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const token = sdk.token;

    // 如果上一次获取 token 的时间超过设定的过期周期
    if (token.isAccessTokenOverTime()) {
      console.log('[INFO] before post request token expired, fetching');
      await token.getAccessToken();
    }

    // 如果要加 access token 就给他拼上去
    if (config.withAccessToken) {
      const accessToken = `access_token=${token.accessToken}`;

      config.url = `${config.url}${config.url?.includes('?') ? '&' : '?'}${accessToken}`;
    }

    // 如果要加 agent id 就给他拼上去
    if (config.withAgentId) {
      const agentId = `agentid=${sdk.__config.agentId}`;

      config.url = `${config.url}${config.url?.includes('?') ? '&' : '?'}${agentId}`;
    }

    if (config.debug) {
      config.url = `${config.url}${config.url?.includes('?') ? '&' : '?'}debug=1`;
    }

    return config;
  }, (err): Promise<any> => {
    return Promise.reject(err);
  })

  request.interceptors.response.use(async (response: AxiosResponse): Promise<AxiosResponse<any>> => {
    // console.log(response);
    const token = sdk.token;

    const { data } = response;

    if ((data?.errcode ?? 0) === ACCESS_TOKEN_EXPIRED_CODE) {
      console.log('[INFO] in request response token expired, fetching');

      // 超时
      if (applyTokenTime >= APPLY_ACCESS_TOKEN_MAX_TIME) {
        applyTokenTime = 0;
        return response;
      }

      applyTokenTime++;

      // 重新获取 token
      await token.getAccessToken();

      // 重新发起请求
      return request(response.config);
    }
    return response;
  }, (err): Promise<any> => {
    return Promise.reject(err);
  });
};
