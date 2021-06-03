"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyXML = void 0;
/*!
 * 将回复消息封装成xml格式，其他类型，请按照业务需求重写该函数，或重新构造一个函数来进行业务支持
 */
exports.replyXML = (fromUsername, toUsername, content, type = 'text') => {
    const info = {};
    info.msgType = type;
    info.createTime = new Date().getTime();
    info.toUsername = toUsername;
    info.fromUsername = fromUsername;
    const body = '<xml>' +
        '<ToUserName><![CDATA[' + info.fromUsername + ']]></ToUserName>' +
        '<FromUserName><![CDATA[' + info.toUsername + ']]></FromUserName>' +
        '<CreateTime>' + info.createTime + '</CreateTime>' +
        '<MsgType><![CDATA[text]]></MsgType>' +
        `<Content><![CDATA[${content}]]></Content>` +
        '</xml>';
    return body;
};
