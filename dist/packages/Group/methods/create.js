"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
exports.create = ({ request, name, owner, userlist, chatid, }) => {
    return new Promise((resolve, reject) => {
        request.post('https://qyapi.weixin.qq.com/cgi-bin/appchat/create', {
            name,
            owner,
            userlist,
            chatid,
        }, {
            withAccessToken: true,
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    });
};
