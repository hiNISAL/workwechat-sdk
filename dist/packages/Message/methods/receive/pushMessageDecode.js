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
exports.pushMessageDecode = void 0;
const WechatCrypto = __importStar(require("wechat-crypto"));
const xml2js = __importStar(require("xml2js"));
const formatMessage_1 = require("./formatMessage");
exports.pushMessageDecode = ({ encodingAESKey, corpId, appToken, cryptor, msgSignature, timestamp, nonce, originXML, }) => {
    cryptor = cryptor || new WechatCrypto(appToken, encodingAESKey, corpId);
    return new Promise((resolve, reject) => {
        xml2js.parseString(originXML, {
            trim: true
        }, function (err, result) {
            if (err) {
                reject(err);
                return;
            }
            const xml = formatMessage_1.formatMessage(result.xml);
            const encrypt = xml.Encrypt;
            if (msgSignature !== cryptor.getSignature(timestamp, nonce, encrypt)) {
                reject(err);
                return;
            }
            const decrypted = cryptor.decrypt(encrypt);
            const xmlMessage = decrypted.message;
            if (xmlMessage === '') {
                reject(err);
                return;
            }
            xml2js.parseString(xmlMessage, {
                trim: true,
            }, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                const message = formatMessage_1.formatMessage(result.xml);
                resolve(message);
            });
        });
    });
};
