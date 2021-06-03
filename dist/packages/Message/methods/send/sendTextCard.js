"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTextCard = void 0;
const helpers_1 = require("./helpers");
exports.sendTextCard = (options) => {
    return new Promise((resolve, reject) => {
        const { request } = options;
        options = helpers_1.preHandlerOptions(options);
        const params = Object.assign(Object.assign({}, helpers_1.getBaseRequestPrams(options)), { msgtype: 'textcard', textcard: {
                title: options.title,
                description: options.desc,
                url: options.url,
                btntxt: options.btntxt,
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
