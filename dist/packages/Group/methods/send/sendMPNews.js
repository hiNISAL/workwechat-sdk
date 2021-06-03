"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMPNews = void 0;
exports.sendMPNews = ({ chatid, articles, request, safe = 0, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
            chatid,
            safe,
            msgtype: 'mpnews',
            mpnews: {
                articles: articles.map((item) => {
                    return {
                        title: item.title,
                        thumb_media_id: item.thumbMediaId,
                        author: item.author,
                        content_source_url: item.contentSourceURL,
                        content: item.content,
                        digest: item.digest,
                    };
                }),
            },
        }, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
