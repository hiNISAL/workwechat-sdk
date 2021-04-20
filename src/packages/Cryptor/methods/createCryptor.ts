import WechatCrypto from 'wechat-crypto';

export const createCryptor = (token: string, encodingAESKey: string, appid: string): any => {
  return new WechatCrypto(token, encodingAESKey, appid);
};
