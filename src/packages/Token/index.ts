import BaseModule from '../';
import { getAccessToken } from './methods';

const EXPIRSE_TIME = 1 * 3600 * 1000; // 1小时

class Token extends BaseModule {
  // 获取 token 的周期
  public EXPIRSE_TIME: number = EXPIRSE_TIME;

  // 上一次获取 token 的时间
  public lastGetAccessTokenTime = 0;

  public get accessToken(): string {
    return this.config.accessToken!;
  }

  // -------------------------------------------------------------------------------
  // access token 是否超时
  public isAccessTokenOverTime(): boolean {
    return (Date.now() - this.lastGetAccessTokenTime) > this.EXPIRSE_TIME;
  }

  // -------------------------------------------------------------------------------
  // 申请一个 access token
  public async getAccessToken(): Promise<any> {
    const {
      corpId,
      corpSecret,
    } = this.config;

    const res: any = await getAccessToken(corpId, corpSecret);

    if (res.access_token) {
      this.config.accessToken = res.access_token;
    }

    this.lastGetAccessTokenTime = Date.now();

    return res;
  }
}

export default Token;
