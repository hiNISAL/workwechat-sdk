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
const ACCESS_TOKEN_EXPIRED_CODE = 42001;
const APPLY_ACCESS_TOKEN_MAX_TIME = 10;
exports.default = (sdk) => {
    const request = sdk.__request;
    let applyTokenTime = 0;
    request.interceptors.request.use((config) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const token = sdk.token;
        // 如果上一次获取 token 的时间超过设定的过期周期
        if (token.isAccessTokenOverTime()) {
            console.log('[INFO] before post request token expired, fetching');
            yield token.getAccessToken();
        }
        // 如果要加 access token 就给他拼上去
        if (config.withAccessToken) {
            const accessToken = `access_token=${token.accessToken}`;
            config.url = `${config.url}${((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes('?')) ? '&' : '?'}${accessToken}`;
        }
        // 如果要加 agent id 就给他拼上去
        if (config.withAgentId) {
            const agentId = `agentid=${sdk.__config.agentId}`;
            config.url = `${config.url}${((_b = config.url) === null || _b === void 0 ? void 0 : _b.includes('?')) ? '&' : '?'}${agentId}`;
        }
        if (config.debug) {
            config.url = `${config.url}${((_c = config.url) === null || _c === void 0 ? void 0 : _c.includes('?')) ? '&' : '?'}debug=1`;
        }
        return config;
    }), (err) => {
        return Promise.reject(err);
    });
    request.interceptors.response.use((response) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        // console.log(response);
        const token = sdk.token;
        const { data } = response;
        if (((_d = data === null || data === void 0 ? void 0 : data.errcode) !== null && _d !== void 0 ? _d : 0) === ACCESS_TOKEN_EXPIRED_CODE) {
            console.log('[INFO] in request response token expired, fetching');
            // 超时
            if (applyTokenTime >= APPLY_ACCESS_TOKEN_MAX_TIME) {
                applyTokenTime = 0;
                return response;
            }
            applyTokenTime++;
            // 重新获取 token
            yield token.getAccessToken();
            // 重新发起请求
            return request(response.config);
        }
        return response;
    }), (err) => {
        return Promise.reject(err);
    });
};
