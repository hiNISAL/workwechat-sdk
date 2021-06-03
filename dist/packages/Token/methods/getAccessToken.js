"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const TARGET_URL = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken';
exports.getAccessToken = (appid, corpsecret) => {
    return new Promise((resolve, reject) => {
        axios_1.default.get(TARGET_URL, {
            params: {
                corpid: appid,
                corpsecret,
            },
        }).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            reject(e);
        });
    });
};
