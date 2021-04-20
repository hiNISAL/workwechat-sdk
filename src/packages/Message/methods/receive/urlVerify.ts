import WechatCrypto from 'wechat-crypto';

interface CryptorURLVerifyMethodOptions extends CryptorURLVerifyOptions {
  appToken: string;
  corpId: string;
  encodingAESKey: string;
}

// 用于校验 url
export const urlVerify = ({
  encodingAESKey,
  appToken,
  corpId,

  msgSignature,
  // 这个参数记得 decodeURIComponent
  echostr,
  timestamp,
  nonce,
  // 如果外面生成了 可以直接传进来用，没有的话函数内会自己生成
  cryptor,
}: CryptorURLVerifyMethodOptions): any => {
  cryptor = cryptor || new WechatCrypto(appToken, encodingAESKey, corpId);
  const decoded = cryptor.getSignature(timestamp, nonce, echostr);
  if (msgSignature === decoded) {
    return cryptor.decrypt(echostr).message;
  }

  return '';
};
