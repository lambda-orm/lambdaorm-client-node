"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormClient = exports.OrmClient = void 0;
const orm_1 = require("./orm");
__exportStar(require("./IOrm"), exports);
__exportStar(require("./manager"), exports);
__exportStar(require("./client"), exports);
var orm_2 = require("./orm");
Object.defineProperty(exports, "OrmClient", { enumerable: true, get: function () { return orm_2.OrmClient; } });
exports.ormClient = orm_1.OrmClient.instance;
//# sourceMappingURL=index.js.map