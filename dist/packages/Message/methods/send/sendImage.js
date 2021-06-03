"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendImage = void 0;
const helpers_1 = require("./helpers");
exports.sendImage = (options) => {
    return new Promise((resolve, reject) => {
        const { request } = options;
        options = helpers_1.preHandlerOptions(options);
        const params = Object.assign(Object.assign({}, helpers_1.getBaseRequestPrams(options)), { msgtype: 'image', image: {
                media_id: options.mediaId,
            }, safe: options.safe || 0 });
        console.log(params);
        request.post('https://qyapi.weixin.qq.com/cgi-bin/message/send', params, {
            withAccessToken: true,
        }).then((res) => {
            // console.log(res);
            resolve(res.data);
        }).catch(e => {
            console.log(e);
            reject(e);
        });
    });
};
