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
const EXPIRSE_TIME = 1 * 3600 * 1000; // 1小时
class Token extends __1.default {
    constructor() {
        super(...arguments);
        // 获取 token 的周期
        this.EXPIRSE_TIME = EXPIRSE_TIME;
        // 上一次获取 token 的时间
        this.lastGetAccessTokenTime = 0;
    }
    get accessToken() {
        return this.config.accessToken;
    }
    // -------------------------------------------------------------------------------
    // access token 是否超时
    isAccessTokenOverTime() {
        return (Date.now() - this.lastGetAccessTokenTime) > this.EXPIRSE_TIME;
    }
    // -------------------------------------------------------------------------------
    // 申请一个 access token
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const { corpId, corpSecret, } = this.config;
            const res = yield methods_1.getAccessToken(corpId, corpSecret);
            if (res.access_token) {
                this.config.accessToken = res.access_token;
            }
            this.lastGetAccessTokenTime = Date.now();
            return res;
        });
    }
}
exports.default = Token;
