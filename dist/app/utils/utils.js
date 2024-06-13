"use strict";
// utils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBigIntToNumber = void 0;
const convertBigIntToNumber = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(exports.convertBigIntToNumber);
    }
    else if (obj && typeof obj === "object") {
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
            if (typeof value === "bigint") {
                return [key, Number(value)];
            }
            else if (typeof value === "object" && value !== null) {
                return [key, (0, exports.convertBigIntToNumber)(value)];
            }
            else {
                return [key, value];
            }
        }));
    }
    return obj;
};
exports.convertBigIntToNumber = convertBigIntToNumber;
//# sourceMappingURL=utils.js.map