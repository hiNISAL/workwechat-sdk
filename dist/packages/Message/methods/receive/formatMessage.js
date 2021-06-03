"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
exports.formatMessage = (result) => {
    const message = {};
    if (typeof result === 'object') {
        for (const key in result) {
            if (!Array.isArray(result[key]) || result[key].length === 0) {
                continue;
            }
            if (result[key].length === 1) {
                const val = result[key][0];
                if (typeof val === 'object') {
                    message[key] = exports.formatMessage(val);
                }
                else {
                    message[key] = (val || '').trim();
                }
            }
            else {
                message[key] = [];
                result[key].forEach(function (item) {
                    message[key].push(exports.formatMessage(item));
                });
            }
        }
    }
    return message;
};
