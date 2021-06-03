"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const methods_1 = require("./methods");
class Cryptor extends __1.default {
    createCryptor(token, encodingAESKey, appid) {
        return methods_1.createCryptor(token, encodingAESKey, appid);
    }
}
exports.default = Cryptor;
