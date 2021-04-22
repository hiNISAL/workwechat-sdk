import BaseModule from '../';
import {
  sendText, urlVerify, pushMessageDecode, getReplyMessage,
  sendImage, sendTextCard, sendMarkdown, sendNews,
  sendMPNews,
} from './methods';

class Message extends BaseModule {
  // -------------------------------------------------------------------------------
  // 发送文本消息给用户
  public sendText(options: MessageSendTextOptions): any {
    const {
      agentid = this.config.agentId,
    } = options;
    return sendText({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 发送图片
  public sendImage(options: MessageSendImageOptions): any {
    const {
      agentid = this.config.agentId,
    } = options;
    return sendImage({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 发送 文本卡片信息
  public sendTextCard(options: MessageSendTextCardOptions): any {
    const {
      agentid = this.config.agentId,
    } = options;
    console.log(options);
    return sendTextCard({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  public sendMarkdown(options: MessageSendMarkdownOptions) {
    const {
      agentid = this.config.agentId,
    } = options;
    console.log({
      ...options,
      agentid,
      request: this.request!,
    });
    return sendMarkdown({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  public sendNews(options: MessageSendNewsOptions) {
    const {
      agentid = this.config.agentId,
    } = options;

    return sendNews({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  public sendMPNews(options: MessageSendMPNewsOptions) {
    const {
      agentid = this.config.agentId,
    } = options;

    return sendMPNews({
      ...options,
      agentid,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 企业微信推送过来的校验接口的校验方法
  // 当在企业微信后台 配置接收消息相关内容时 保存信息的时候会产生校验请求
  // 这个请求会请求到配置的服务中 然后需要对请求上的一些参数进行解码 并将解码结果作为响应
  // 如果能正常响应 则为校验痛可以，可以保存设置
  // 本方法就用于校验相关工作
  // 可以配合 utils.getReceiveMsgVerifyParamsFromQuery 使用
  public receiveMsgVerify(options: CryptorURLVerifyOptions): string {
    const {
      encodingAESKey = '',
      appToken = '',
      corpId = '',
    } = this.config;

    return urlVerify({
      encodingAESKey,
      appToken,
      corpId,
      ...options,
    });
  }

  // -------------------------------------------------------------------------------
  // 企业微信 消息接收解密
  // 当配置好消息接收api后，企业微信就会向配置的接口推送消息
  // 推送来的消息需要进行解密
  // 可以配合 utils.getReceiveMsgDecodeParamsFromQuery 使用
  public async receiveMsgDecode(options: CryptorPushMessageDecodeOptions): Promise<string> {
    const {
      encodingAESKey = '',
      appToken = '',
      corpId = '',
    } = this.config;

    return pushMessageDecode({
      ...options,
      encodingAESKey,
      appToken,
      corpId,
    });
  }

  // -------------------------------------------------------------------------------
  // 当企业微信推送用户向应用发送的消息到服务端时
  // 可以对企业微信的推送请求进行响应，响应就是直接发送消息到对应用户
  // 但该接口对响应的格式有一定要求
  // 本方法用于生成相关格式
  /**
   * @param fromUsername 通过 receiveMsgDecode 解码后可以得到
   * @param toUsername 通过 receiveMsgDecode 解码后可以得到
   * @param content 推送内容
   * @returns
   */
  public createReceiveMsgResBody(fromUsername: string, toUsername: string, content: string) {
    const {
      encodingAESKey = '',
      appToken = '',
      corpId = '',
    } = this.config;

    return getReplyMessage(fromUsername, toUsername, content, {
      encodingAESKey,
      appToken,
      corpId,
    });
  }
}

export default Message;
