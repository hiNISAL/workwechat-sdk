"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cryptor_1 = __importDefault(require("./packages/Cryptor"));
const Group_1 = __importDefault(require("./packages/Group"));
const Token_1 = __importDefault(require("./packages/Token"));
const Message_1 = __importDefault(require("./packages/Message"));
const Utils_1 = __importDefault(require("./packages/Utils"));
const Source_1 = __importDefault(require("./packages/Source"));
const User_1 = __importDefault(require("./packages/User"));
const Checkin_1 = __importDefault(require("./packages/Checkin"));
const Department_1 = __importDefault(require("./packages/Department"));
const App_1 = __importDefault(require("./packages/App"));
const axios_1 = __importDefault(require("axios"));
const initRequest_1 = __importDefault(require("./helpers/initRequest"));
class WorkWechat {
    constructor(config) {
        this.__config = {
            corpId: '',
            corpSecret: '',
            appToken: '',
        };
        this.__request = axios_1.default.create();
        this.cryptor = new Cryptor_1.default();
        this.token = new Token_1.default();
        this.group = new Group_1.default();
        this.message = new Message_1.default();
        this.utils = new Utils_1.default();
        this.source = new Source_1.default();
        this.user = new User_1.default();
        this.department = new Department_1.default();
        this.checkin = new Checkin_1.default();
        this.application = new App_1.default();
        this.__config = config;
        this.dep = this.department;
        this.app = this.application;
        this.__init();
    }
    __init() {
        this.cryptor.injectSDK(this);
        this.message.injectSDK(this);
        this.token.injectSDK(this);
        this.group.injectSDK(this);
        this.utils.injectSDK(this);
        this.source.injectSDK(this);
        this.user.injectSDK(this);
        this.department.injectSDK(this);
        this.checkin.injectSDK(this);
        this.app.injectSDK(this);
        this.__initRequest();
    }
    __initRequest() {
        initRequest_1.default(this);
    }
}
exports.default = WorkWechat;
