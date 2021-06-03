import BaseModule from '../';
declare class Cryptor extends BaseModule {
    createCryptor(token: string, encodingAESKey: string, appid: string): any;
}
export default Cryptor;
