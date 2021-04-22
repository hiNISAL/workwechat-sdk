import BaseModule from '../';
import { info } from './methods';

class User extends BaseModule {
  public info(options: UserInfoOptions) {
    return info({
      ...options,
      request: this.request!,
    });
  }
}

export default User;
