import BaseModule from '../';
import { createCryptor } from './methods';

class Cryptor extends BaseModule {
  createCryptor(token: string, encodingAESKey: string, appid: string) {
    return createCryptor(token, encodingAESKey, appid);
  }
}

export default Cryptor;
