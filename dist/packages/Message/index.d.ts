import BaseModule from '../';
declare class Message extends BaseModule {
    sendText(options: MessageSendTextOptions): any;
    sendImage(options: MessageSendImageOptions): any;
    sendTextCard(options: MessageSendTextCardOptions): any;
    sendMarkdown(options: MessageSendMarkdownOptions): any;
    sendNews(options: MessageSendNewsOptions): any;
    sendMPNews(options: MessageSendMPNewsOptions): any;
    receiveMsgVerify(options: CryptorURLVerifyOptions): string;
    receiveMsgDecode(options: CryptorPushMessageDecodeOptions): Promise<string>;
    /**
     * @param fromUsername 通过 receiveMsgDecode 解码后可以得到
     * @param toUsername 通过 receiveMsgDecode 解码后可以得到
     * @param content 推送内容
     * @returns
     */
    createReceiveMsgResBody(fromUsername: string, toUsername: string, content: string): any;
}
export default Message;
