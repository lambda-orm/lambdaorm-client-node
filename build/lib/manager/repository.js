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
exports.Repository = void 0;
const orm_1 = require("./../orm");
const query_1 = require("./query");
const expressionActions_1 = require("./expressionActions");
class Repository {
    constructor(name, stage, Orm) {
        this.name = name;
        this.stage = stage;
        this.orm = Orm || orm_1.OrmClient.instance;
    }
    _execute(head, filter, include, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let expression = `${head}`;
            if (filter !== undefined) {
                expression = `${expression}.filter(${filter.toString()})`;
            }
            if (include !== undefined) {
                expression = `${expression}.include(${include.toString()})`;
            }
            return yield this.orm.execute(expression, data, { stage: this.stage });
        });
    }
    execute(expression, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.execute(`${this.name}${expression}`, data, { stage: this.stage });
        });
    }
    executeQueued(topic, expression, data, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.orm.executeQueued(`${this.name}${expression}`, topic, data, chunk, { stage: this.stage });
        });
    }
    insert(entity, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.insert()`, undefined, include, entity);
        });
    }
    bulkInsert(entities, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.bulkInsert()`, undefined, include, entities);
        });
    }
    update(entity, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.update()`, undefined, include, entity);
        });
    }
    updateAll(data, map, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.updateAll(${map.toString()})`, filter, include, data);
        });
    }
    merge(entity, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.merge()`, undefined, include, entity);
        });
    }
    delete(entity, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.delete()`, undefined, include, entity);
        });
    }
    deleteAll(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.deleteAll()`, filter, include, data);
        });
    }
    list(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}`, filter, include, data);
        });
    }
    distinct(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._execute(`${this.name}.distinct()`, filter, include, data);
        });
    }
    first(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._execute(`${this.name}.first()`, filter, include, data);
            if (result.length >= 1) {
                return result[0];
            }
            else {
                return null;
            }
        });
    }
    last(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._execute(`${this.name}.last()`, filter, include, data);
            if (result.length >= 1) {
                return result[0];
            }
            else {
                return null;
            }
        });
    }
    take(data, filter, include) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._execute(`${this.name}.take()`, filter, include, data);
            if (result.length >= 1) {
                return result[0];
            }
            else {
                return null;
            }
        });
    }
    query() {
        return new query_1.Queryable(new expressionActions_1.ExpressionActions(this.name, this.orm, this.stage), '');
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map