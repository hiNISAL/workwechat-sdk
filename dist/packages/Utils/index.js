"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class Utils extends __1.default {
    // -------------------------------------------------------------------------------
    // 企业微信 接收消息服务
    // 当在后台配置了接收消息的接口后，企业微信会发送校验接口过来
    // 校验接口需要处理一些解码相关操作，对应到 sdk 中的 message.receiveMsgVerify 方法
    // 本方法提供了解码方法需要的一些参数 直接从query中取
    // 示例：
    //   const verifyOptions = workWechat.utils.getReceiveMsgVerifyParamsFromQuery(request.query);
    //   const verify = workWechat.message.receiveMsgVerify(verifyOptions);
    //   verify 可以直接作为响应
    getReceiveMsgVerifyParamsFromQuery(query) {
        const msgSignature = query.msg_signature;
        const timestamp = query.timestamp;
        const nonce = query.nonce;
        const echostr = decodeURIComponent(query.echostr);
        return {
            msgSignature,
            echostr,
            timestamp,
            nonce,
        };
    }
    // -------------------------------------------------------------------------------
    // 企业微信 接收消息服务
    // 从 query 中获取参数
    // 当自建应用开启了消息推送，并通过校验后，会推送消息到配置的接口上
    // 这里可以用于获取 sdk 对应解码接口（message.receiveMsgDecode） 需要的参数
    // 还有一个参数( originXML )需要从 body 取
    // 示例：
    //    const decodeOptions = workWechat.utils.getReceiveMsgDecodeParamsFromQuery(ctx.query);
    //    const message = await workWechat.message.receiveMsgDecode({
    //      ...decodeOptions,
    //      originXML: request.body,
    //    });
    getReceiveMsgDecodeParamsFromQuery(query) {
        const msgSignature = query.msg_signature;
        const timestamp = query.timestamp;
        const nonce = query.nonce;
        return {
            msgSignature,
            timestamp,
            nonce,
        };
    }
}
exports.default = Utils;
