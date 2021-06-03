"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNews = void 0;
exports.sendNews = ({ chatid, articles, request, safe = 0, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
            chatid,
            safe,
            msgtype: 'news',
            news: {
                articles: articles.map((item) => {
                    return {
                        title: item.title,
                        description: item.desc,
                        url: item.url,
                        picurl: item.picurl,
                    };
                }),
            }
        }, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
