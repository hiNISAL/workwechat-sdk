"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendText = void 0;
exports.sendText = ({ chatid, content, safe, request, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
            chatid,
            text: {
                content,
            },
            safe,
            msgtype: 'text',
        }, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
