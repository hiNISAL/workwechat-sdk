"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeWithoutNil = void 0;
exports.mergeWithoutNil = (target, from) => {
    from = JSON.parse(JSON.stringify(from));
    Object.assign(target, from);
    return target;
};
