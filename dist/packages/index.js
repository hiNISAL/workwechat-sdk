"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleBase {
    constructor() {
        this.config = {
            corpId: '',
            corpSecret: '',
            appToken: '',
        };
    }
    get request() {
        var _a;
        return (_a = this.___sdk) === null || _a === void 0 ? void 0 : _a.__request;
    }
    injectSDK(sdk) {
        this.___sdk = sdk;
        this.config = sdk.__config;
    }
}
exports.default = ModuleBase;
