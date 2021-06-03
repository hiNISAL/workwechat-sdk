"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIPost = exports.API = void 0;
exports.API = (path, withAccessToken = true, prefix = 'https://qyapi.weixin.qq.com/cgi-bin', method = 'GET') => {
    return (clazz, name, desc) => {
        const fn = clazz[name];
        method = method.toLocaleLowerCase();
        desc.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = (yield fn(...args)) || {};
                if (method === 'get') {
                    return (yield this.request.get(`${prefix}${path}`, {
                        params: res,
                        withAccessToken,
                    })).data;
                }
                else {
                    return (yield this.request.post(`${prefix}${path}`, res, {
                        withAccessToken,
                    })).data;
                }
            });
        };
    };
};
exports.APIPost = (path, withAccessToken = true, prefix = 'https://qyapi.weixin.qq.com/cgi-bin') => {
    return exports.API(path, withAccessToken, prefix, 'POST');
};
