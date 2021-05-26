import BaseModule from '../';
import {
  sendText, create, sendMarkdown,
  sendNews, sendMPNews, sendTextCard,
} from './methods';

class Group extends BaseModule {
  // -------------------------------------------------------------------------------
  // 向群推送文本消息
  public sendText(options: GroupSendTextOptions) {
    return sendText({
      ...options,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 想群聊推送markdown
  public sendMarkdown(options: GroupSendMarkdownOptions) {
    return sendMarkdown({
      ...options,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 发送图文消息
  public sendNews(options: GroupSendNewsOptions) {
    return sendNews({
      ...options,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 发送图文消息
  public sendMPNews(options: GroupSendMPNewsOptions) {
    return sendMPNews({
      ...options,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 发送图文消息
  public sendTextCard(options: GroupSendTextCardOptions) {
    return sendTextCard({
      ...options,
      request: this.request!,
    });
  }

  // -------------------------------------------------------------------------------
  // 创建群聊
  public create(options: GroupCreateOptions) {
    return create({
      ...options,
      request: this.request!,
    });
  }
}

export default Group;
