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
exports.urlVerify = void 0;
const WechatCrypto = __importStar(require("wechat-crypto"));
// 用于校验 url
exports.urlVerify = ({ encodingAESKey, appToken, corpId, msgSignature, 
// 这个参数记得 decodeURIComponent
echostr, timestamp, nonce, 
// 如果外面生成了 可以直接传进来用，没有的话函数内会自己生成
cryptor, }) => {
    cryptor = cryptor || new WechatCrypto(appToken, encodingAESKey, corpId);
    const decoded = cryptor.getSignature(timestamp, nonce, echostr);
    if (msgSignature === decoded) {
        return cryptor.decrypt(echostr).message;
    }
    return '';
};
