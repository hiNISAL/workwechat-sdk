"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const methods_1 = require("./methods");
class Source extends __1.default {
    upload(options) {
        const { type, media, filename, } = options;
        return methods_1.upload({
            type,
            media,
            filename,
            request: this.request,
        });
    }
    uploadImage(options) {
        return this.upload(Object.assign({ type: 'image' }, options));
    }
    uploadVoice(options) {
        return this.upload(Object.assign({ type: 'voice' }, options));
    }
    uploadFile(options) {
        return this.upload(Object.assign({ type: 'file' }, options));
    }
    uploadVideo(options) {
        return this.upload(Object.assign({ type: 'video' }, options));
    }
}
exports.default = Source;
