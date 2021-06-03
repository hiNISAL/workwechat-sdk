"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
exports.info = (options) => {
    const { userId, request, } = options;
    return new Promise((resolve, reject) => {
        request.get(`https://qyapi.weixin.qq.com/cgi-bin/user/get?userid=${userId}`, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
