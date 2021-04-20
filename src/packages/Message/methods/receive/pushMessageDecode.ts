import WechatCrypto from 'wechat-crypto';
import xml2js from 'xml2js';
import { formatMessage } from './formatMessage';

interface CryptorPushMessageDecodeMethodOptions extends CryptorPushMessageDecodeOptions {
  appToken: string;
  corpId: string;
  encodingAESKey: string;
}

export const pushMessageDecode = ({
  encodingAESKey,
  corpId,
  appToken,

  cryptor,
  msgSignature,
  timestamp,
  nonce,
  originXML,
}: CryptorPushMessageDecodeMethodOptions): any => {
  cryptor = cryptor || new WechatCrypto(appToken, encodingAESKey, corpId);

  return new Promise((resolve, reject) => {
    xml2js.parseString(originXML, {
      trim: true
    }, function (err: any, result: any) {
      if (err) {
        reject(err);
        return;
      }

      const xml = formatMessage(result.xml);
      const encrypt = xml.Encrypt;

      if (msgSignature !== cryptor.getSignature(timestamp, nonce, encrypt)) {
        reject(err);
        return;
      }

      const decrypted = cryptor.decrypt(encrypt);
      const xmlMessage = decrypted.message;

      if (xmlMessage === '') {
        reject(err);
        return;
      }

      xml2js.parseString(xmlMessage, {
        trim: true,
      }, (err: any, result: any) => {
        if (err) {
          reject(err);
          return;
        }

        const message = formatMessage(result.xml);

        resolve(message);
      });
    });
  });
};
