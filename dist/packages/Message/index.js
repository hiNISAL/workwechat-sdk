"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const methods_1 = require("./methods");
class Message extends __1.default {
    // -------------------------------------------------------------------------------
    // 发送文本消息给用户
    sendText(options) {
        const { agentid = this.config.agentId, } = options;
        return methods_1.sendText(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 发送图片
    sendImage(options) {
        const { agentid = this.config.agentId, } = options;
        return methods_1.sendImage(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 发送 文本卡片信息
    sendTextCard(options) {
        const { agentid = this.config.agentId, } = options;
        console.log(options);
        return methods_1.sendTextCard(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    sendMarkdown(options) {
        const { agentid = this.config.agentId, } = options;
        console.log(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
        return methods_1.sendMarkdown(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    sendNews(options) {
        const { agentid = this.config.agentId, } = options;
        return methods_1.sendNews(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    sendMPNews(options) {
        const { agentid = this.config.agentId, } = options;
        return methods_1.sendMPNews(Object.assign(Object.assign({}, options), { agentid, request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 企业微信推送过来的校验接口的校验方法
    // 当在企业微信后台 配置接收消息相关内容时 保存信息的时候会产生校验请求
    // 这个请求会请求到配置的服务中 然后需要对请求上的一些参数进行解码 并将解码结果作为响应
    // 如果能正常响应 则为校验痛可以，可以保存设置
    // 本方法就用于校验相关工作
    // 可以配合 utils.getReceiveMsgVerifyParamsFromQuery 使用
    receiveMsgVerify(options) {
        const { encodingAESKey = '', appToken = '', corpId = '', } = this.config;
        return methods_1.urlVerify(Object.assign({ encodingAESKey,
            appToken,
            corpId }, options));
    }
    // -------------------------------------------------------------------------------
    // 企业微信 消息接收解密
    // 当配置好消息接收api后，企业微信就会向配置的接口推送消息
    // 推送来的消息需要进行解密
    // 可以配合 utils.getReceiveMsgDecodeParamsFromQuery 使用
    receiveMsgDecode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { encodingAESKey = '', appToken = '', corpId = '', } = this.config;
            return methods_1.pushMessageDecode(Object.assign(Object.assign({}, options), { encodingAESKey,
                appToken,
                corpId }));
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
    createReceiveMsgResBody(fromUsername, toUsername, content) {
        const { encodingAESKey = '', appToken = '', corpId = '', } = this.config;
        return methods_1.getReplyMessage(fromUsername, toUsername, content, {
            encodingAESKey,
            appToken,
            corpId,
        });
    }
}
exports.default = Message;
