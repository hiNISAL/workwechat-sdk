"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMarkdown = void 0;
exports.sendMarkdown = ({ chatid, safe = 0, content, request, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
            chatid,
            safe,
            markdown: {
                content,
            },
            msgtype: 'markdown',
        }, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
