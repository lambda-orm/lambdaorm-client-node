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
exports.Queryable = exports.FilterClauses = exports.IncludeClauses = exports.FilterIncludeClauses = exports.HavingClauses = exports.Map2Clauses = exports.MapClauses = exports.PageClauses = exports.QueryAction = void 0;
class QueryAction {
    constructor(actions, expression) {
        this.actions = actions;
        this.expression = expression;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.execute(this.expression, data);
        });
    }
    executeQueued(topic, data, chunk) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.executeQueued(this.expression, topic, data, chunk);
        });
    }
    model() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.model(this.expression);
        });
    }
    constraints() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.constraints(this.expression);
        });
    }
    parameters() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.parameters(this.expression);
        });
    }
    sentence() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.sentence(this.expression);
        });
    }
    metadata() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actions.metadata(this.expression);
        });
    }
}
exports.QueryAction = QueryAction;
class PageClauses extends QueryAction {
    /**  */
    page(page, records) {
        return new QueryAction(this.actions, `${this.expression}.page(${page},${records})`);
    }
}
exports.PageClauses = PageClauses;
class MapClauses extends PageClauses {
    /**  */
    sort(predicate) {
        return new PageClauses(this.actions, `${this.expression}.sort(${predicate.toString()})`);
    }
}
exports.MapClauses = MapClauses;
class Map2Clauses extends QueryAction {
    /**  */
    sort(predicate) {
        return new PageClauses(this.actions, `${this.expression}.sort(${predicate.toString()})`);
    }
}
exports.Map2Clauses = Map2Clauses;
class HavingClauses extends MapClauses {
    /**  */
    map(predicate) {
        return new MapClauses(this.actions, `${this.expression}.map(${predicate.toString()})`);
    }
    /**  */
    first(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.first(${predicate.toString()})`);
    }
    /**  */
    last(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.last(${predicate.toString()})`);
    }
    /**  */
    take(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.take(${predicate.toString()})`);
    }
    /**  */
    distinct(predicate) {
        return new MapClauses(this.actions, `${this.expression}.distinct(${predicate.toString()})`);
    }
}
exports.HavingClauses = HavingClauses;
class FilterIncludeClauses extends HavingClauses {
    /**  */
    having(predicate) {
        return new HavingClauses(this.actions, `${this.expression}.having(${predicate.toString()})`);
    }
}
exports.FilterIncludeClauses = FilterIncludeClauses;
class IncludeClauses extends HavingClauses {
    /**  */
    filter(predicate) {
        return new FilterIncludeClauses(this.actions, `${this.expression}.filter(${predicate.toString()})`);
    }
    /**  */
    having(predicate) {
        return new HavingClauses(this.actions, `${this.expression}.having(${predicate.toString()})`);
    }
}
exports.IncludeClauses = IncludeClauses;
class FilterClauses extends HavingClauses {
    /**  */
    include(predicate) {
        return new IncludeClauses(this.actions, `${this.expression}.include(${predicate.toString()})`);
    }
    /**  */
    having(predicate) {
        return new HavingClauses(this.actions, `${this.expression}.having(${predicate.toString()})`);
    }
}
exports.FilterClauses = FilterClauses;
class Queryable extends MapClauses {
    /**  */
    filter(predicate) {
        return new FilterClauses(this.actions, `${this.expression}.filter(${predicate.toString()})`);
    }
    /**  */
    include(predicate) {
        return new IncludeClauses(this.actions, `${this.expression}.include(${predicate.toString()})`);
    }
    /**  */
    map(predicate) {
        return new MapClauses(this.actions, `${this.expression}.map(${predicate.toString()})`);
    }
    /**  */
    first(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.first(${predicate.toString()})`);
    }
    /**  */
    last(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.last(${predicate.toString()})`);
    }
    /**  */
    take(predicate) {
        return new Map2Clauses(this.actions, `${this.expression}.take(${predicate.toString()})`);
    }
    /**  */
    distinct(predicate) {
        return new MapClauses(this.actions, `${this.expression}.distinct(${predicate.toString()})`);
    }
    /**  */
    having(predicate) {
        return new HavingClauses(this.actions, `${this.expression}.having(${predicate.toString()})`);
    }
}
exports.Queryable = Queryable;
//# sourceMappingURL=query.js.map