import { ExpressionActions } from './expressionActions';
import { MetadataConstraint, MetadataModel, MetadataParameter, MetadataSentence, Metadata } from '../client';
export declare class QueryAction {
    protected actions: any;
    protected expression: any;
    constructor(actions: ExpressionActions, expression: string);
    execute(data: any): Promise<any>;
    executeQueued(topic: string, data: any, chunk?: number): Promise<any>;
    model(): Promise<MetadataModel[]>;
    constraints(): Promise<MetadataConstraint>;
    parameters(): Promise<MetadataParameter[]>;
    sentence(): Promise<MetadataSentence>;
    metadata(): Promise<Metadata>;
}
export declare class PageClauses extends QueryAction {
    /**  */
    page(page: number, records: number): QueryAction;
}
export declare class MapClauses<T> extends PageClauses {
    /**  */
    sort(predicate: (value: T, index: number, array: T[]) => unknown): PageClauses;
}
export declare class Map2Clauses<T> extends QueryAction {
    /**  */
    sort(predicate: (value: T, index: number, array: T[]) => unknown): PageClauses;
}
export declare class HavingClauses<T> extends MapClauses<T> {
    /**  */
    map<U>(predicate: (value: T, index: number, array: T[]) => U): MapClauses<U>;
    /**  */
    first<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    last<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    take<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    distinct<U>(predicate: (value: T, index: number, array: T[]) => U): MapClauses<U>;
}
export declare class FilterIncludeClauses<T> extends HavingClauses<T> {
    /**  */
    having(predicate: (value: T, index: number, array: T[]) => unknown): HavingClauses<T>;
}
export declare class IncludeClauses<T> extends HavingClauses<T> {
    /**  */
    filter(predicate: (value: T, index: number, array: T[]) => unknown): FilterIncludeClauses<T>;
    /**  */
    having(predicate: (value: T, index: number, array: T[]) => unknown): HavingClauses<T>;
}
export declare class FilterClauses<T> extends HavingClauses<T> {
    /**  */
    include(predicate: (value: T, index: number, array: T[]) => unknown): IncludeClauses<T>;
    /**  */
    having(predicate: (value: T, index: number, array: T[]) => unknown): HavingClauses<T>;
}
export declare class Queryable<T> extends MapClauses<T> {
    /**  */
    filter(predicate: (value: T, index: number, array: T[]) => unknown): FilterClauses<T>;
    /**  */
    include(predicate: (value: T, index: number, array: T[]) => unknown): IncludeClauses<T>;
    /**  */
    map<U>(predicate: (value: T, index: number, array: T[]) => U): MapClauses<U>;
    /**  */
    first<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    last<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    take<U>(predicate: (value: T, index: number, array: T[]) => U): Map2Clauses<U>;
    /**  */
    distinct<U>(predicate: (value: T, index: number, array: T[]) => U): MapClauses<U>;
    /**  */
    having(predicate: (value: T, index: number, array: T[]) => unknown): HavingClauses<T>;
}
