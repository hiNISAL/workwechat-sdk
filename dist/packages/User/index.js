"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("../"));
const methods_1 = require("./methods");
class User extends __1.default {
    info(options) {
        return methods_1.info(Object.assign(Object.assign({}, options), { request: this.request }));
    }
}
exports.default = User;
