import BaseModule from '../';
declare class Group extends BaseModule {
    sendText(options: GroupSendTextOptions): Promise<unknown>;
    sendMarkdown(options: GroupSendMarkdownOptions): Promise<unknown>;
    sendNews(options: GroupSendNewsOptions): Promise<unknown>;
    sendMPNews(options: GroupSendMPNewsOptions): Promise<unknown>;
    sendTextCard(options: GroupSendTextCardOptions): Promise<unknown>;
    create(options: GroupCreateOptions): Promise<unknown>;
}
export default Group;
