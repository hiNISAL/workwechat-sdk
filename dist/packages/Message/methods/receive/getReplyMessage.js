"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReplyMessage = void 0;
const WechatCrypto = __importStar(require("wechat-crypto"));
const replyXML_1 = require("./replyXML");
/*
 * 回复消息 将消息打包成xml并加密返回给用户
 * */
exports.getReplyMessage = (fromUsername, toUsername, content, { encodingAESKey, appToken, corpId, }) => {
    const xml = replyXML_1.replyXML(fromUsername, toUsername, content);
    const cryptor = new WechatCrypto(appToken, encodingAESKey, corpId);
    const encrypt = cryptor.encrypt(xml);
    const nonce = parseInt((Math.random() * 100000000000), 10);
    const timestamp = new Date().getTime();
    const signature = cryptor.getSignature(timestamp, nonce, encrypt);
    const wrapTpl = '<xml>' +
        '<Encrypt><![CDATA[' + encrypt + ']]></Encrypt>' +
        ' <MsgSignature><![CDATA[' + signature + ']]></MsgSignature>' +
        '<TimeStamp>' + timestamp + '</TimeStamp>' +
        '<Nonce><![CDATA[' + nonce + ']]></Nonce>' +
        '</xml>';
    return wrapTpl;
};
