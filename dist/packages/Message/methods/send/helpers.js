"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseRequestPrams = exports.preHandlerOptions = void 0;
exports.preHandlerOptions = (object) => {
    const { touser, totag, toparty, } = object;
    if (touser && (typeof touser !== 'string')) {
        object.touser = touser.join('|');
    }
    if (totag && (typeof totag !== 'string')) {
        object.totag = totag.join('|');
    }
    if (toparty && (typeof toparty !== 'string')) {
        object.toparty = toparty.join('|');
    }
    return object;
};
exports.getBaseRequestPrams = (options) => {
    const params = {
        agentid: options.agentid,
    };
    if (options.toparty) {
        params.toparty = options.toparty;
    }
    if (options.totag) {
        params.totag = options.totag;
    }
    if (options.touser) {
        params.touser = options.touser;
    }
    return params;
};
