"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTextCard = void 0;
exports.sendTextCard = ({ chatid, request, title, desc, url, btntxt, safe = 0, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/send', {
            chatid,
            msgtype: 'textcard',
            textcard: {
                title,
                description: desc,
                url,
                btntxt,
            },
            safe,
        }, {
            withAccessToken: true,
        }).then((res) => {
            console.log(res.data);
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
