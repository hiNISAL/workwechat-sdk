import * as WechatCrypto from 'wechat-crypto';
import { replyXML } from './replyXML';

/*
 * 回复消息 将消息打包成xml并加密返回给用户
 * */
export const getReplyMessage = (fromUsername: string, toUsername: string, content: string, {
  encodingAESKey,
  appToken,
  corpId,
}: any): any => {
  const xml = replyXML(fromUsername, toUsername, content);
  const cryptor = new WechatCrypto(appToken, encodingAESKey, corpId);
  const encrypt = cryptor.encrypt(xml);
  const nonce = parseInt((Math.random() * 100000000000) as any, 10);
  const timestamp = new Date().getTime();
  const signature = cryptor.getSignature(timestamp, nonce, encrypt);

  const wrapTpl = '<xml>' +
    '<Encrypt><![CDATA[' + encrypt + ']]></Encrypt>' +
    ' <MsgSignature><![CDATA[' + signature + ']]></MsgSignature>' +
    '<TimeStamp>' + timestamp + '</TimeStamp>' +
    '<Nonce><![CDATA[' + nonce + ']]></Nonce>' +
    '</xml>';

  return wrapTpl;
}
