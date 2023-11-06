"use strict";
/* eslint-disable @typescript-eslint/ban-types */
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
exports.OrmClient = void 0;
const client_1 = require("./client");
const _3xpr_1 = require("3xpr");
const manager_1 = require("./manager");
/**
 * Facade through which you can access all the functionalities of the library.
 */
class OrmClient {
    constructor(host = 'http://localhost:9289') {
        this.host = host;
    }
    /**
 * Singleton
 */
    static get instance() {
        if (!this._instance) {
            this._instance = new OrmClient();
        }
        return this._instance;
    }
    init(host) {
        return __awaiter(this, void 0, void 0, function* () {
            if (host) {
                this.host = host;
            }
            new manager_1.SentenceLibrary(_3xpr_1.expressions.model).load();
            this.configuration = new client_1.Configuration({ basePath: this.host });
            this.expressionApi = new client_1.ExpressionApi(this.configuration);
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    end() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    model(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.model({ expression: _expression });
            return result.data;
        });
    }
    parameters(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.parameters({ expression: _expression });
            return result.data;
        });
    }
    constraints(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.constraints({ expression: _expression });
            return result.data;
        });
    }
    metadata(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.metadata({ expression: _expression });
            return result.data;
        });
    }
    sentence(expression, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            const _options = this.solveOptions(options);
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.sentence({ expression: _expression, options: _options });
            return result.data;
        });
    }
    execute(expression, data = {}, options = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            const _options = this.solveOptions(options);
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.execute({ expression: _expression, data, options: _options });
            return result.data;
        });
    }
    executeQueued(expression, topic, data = {}, chunk, options = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const _expression = typeof expression !== 'string' ? _3xpr_1.expressions.toExpression(expression) : expression;
            const _options = this.solveOptions(options);
            if (!this.expressionApi) {
                throw new Error('Orm not initialized');
            }
            const result = yield this.expressionApi.executeQueued({ expression: _expression, data, options: _options, topic, chunk });
            return result.data;
        });
    }
    solveOptions(options) {
        if (!options) {
            options = {};
        }
        if (!options.stage) {
            options.stage = 'default';
        }
        if (!options.view) {
            options.view = 'default';
        }
        return options;
    }
}
exports.OrmClient = OrmClient;
//# sourceMappingURL=orm.js.map