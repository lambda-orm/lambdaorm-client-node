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
exports.ExpressionActions = void 0;
class ExpressionActions {
    constructor(name, orm, stage) {
        this.name = name;
        this.stage = stage;
        this.orm = orm;
    }
    model(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.model(`${this.name}${expression}`);
        });
    }
    parameters(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.parameters(`${this.name}${expression}`);
        });
    }
    constraints(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.constraints(`${this.name}${expression}`);
        });
    }
    metadata(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.metadata(`${this.name}${expression}`);
        });
    }
    sentence(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.sentence(`${this.name}${expression}`, { stage: this.stage });
        });
    }
    execute(expression, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.execute(`${this.name}${expression}`, data, { stage: this.stage });
        });
    }
    executeQueued(expression, topic, data, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.executeQueued(`${this.name}${expression}`, topic, data, chunk, { stage: this.stage });
        });
    }
}
exports.ExpressionActions = ExpressionActions;
//# sourceMappingURL=expressionActions.js.map