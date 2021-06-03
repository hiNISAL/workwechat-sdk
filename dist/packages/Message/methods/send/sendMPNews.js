"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMPNews = void 0;
const helpers_1 = require("./helpers");
exports.sendMPNews = (options) => {
    return new Promise((resolve, reject) => {
        const { request } = options;
        options = helpers_1.preHandlerOptions(options);
        const params = Object.assign(Object.assign({}, helpers_1.getBaseRequestPrams(options)), { msgtype: 'mpnews', news: {
                articles: options.articles.map((item) => {
                    return {
                        title: item.title,
                        thumb_media_id: item.thumbMediaId,
                        author: item.author,
                        content_source_url: item.contentSourceURL,
                        content: item.content,
                        digest: item.digest,
                    };
                }),
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
