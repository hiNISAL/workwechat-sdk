import BaseModule from '../';
import { sendText, create } from './methods';

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
  // 创建群聊
  public create(options: GroupCreateOptions) {
    return create({
      ...options,
      request: this.request!,
    });
  }
}

export default Group;
