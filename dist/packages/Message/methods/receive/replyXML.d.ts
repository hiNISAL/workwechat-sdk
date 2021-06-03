/*!
 * 将回复消息封装成xml格式，其他类型，请按照业务需求重写该函数，或重新构造一个函数来进行业务支持
 */
export declare const replyXML: (fromUsername: string, toUsername: string, content: string, type?: string) => any;
