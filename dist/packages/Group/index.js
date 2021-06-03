"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const methods_1 = require("./methods");
class Group extends __1.default {
    // -------------------------------------------------------------------------------
    // 向群推送文本消息
    sendText(options) {
        return methods_1.sendText(Object.assign(Object.assign({}, options), { request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 想群聊推送markdown
    sendMarkdown(options) {
        return methods_1.sendMarkdown(Object.assign(Object.assign({}, options), { request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 发送图文消息
    sendNews(options) {
        return methods_1.sendNews(Object.assign(Object.assign({}, options), { request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 发送图文消息
    sendMPNews(options) {
        return methods_1.sendMPNews(Object.assign(Object.assign({}, options), { request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 发送图文消息
    sendTextCard(options) {
        return methods_1.sendTextCard(Object.assign(Object.assign({}, options), { request: this.request }));
    }
    // -------------------------------------------------------------------------------
    // 创建群聊
    create(options) {
        return methods_1.create(Object.assign(Object.assign({}, options), { request: this.request }));
    }
}
exports.default = Group;
