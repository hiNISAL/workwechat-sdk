"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendText = void 0;
const helpers_1 = require("./helpers");
exports.sendText = (options) => {
    return new Promise((resolve, reject) => {
        const { request } = options;
        options = helpers_1.preHandlerOptions(options);
        const params = Object.assign(Object.assign({}, helpers_1.getBaseRequestPrams(options)), { msgtype: 'text', text: {
                content: options.content,
            }, safe: options.safe || 0 });
        request.post('https://qyapi.weixin.qq.com/cgi-bin/message/send', params, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch(e => {
            console.log(e);
            reject(e);
        });
    });
};
