import { IOrmClient } from '../IOrm';
import { Queryable } from './query';
export declare class Repository<TEntity, TQuery> {
    name: string;
    stage?: string;
    private orm;
    constructor(name: string, stage?: string, Orm?: IOrmClient);
    protected _execute(head: string, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown, data?: any): Promise<any>;
    execute(expression: string, data?: any): Promise<any>;
    executeQueued(topic: string, expression: string, data?: any, chunk?: number): Promise<any>;
    /**  */
    insert(entity: TEntity): Promise<any>;
    /**  */
    insert(entity: TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any>;
    /**  */
    bulkInsert(entities: TEntity[]): Promise<any[]>;
    /**  */
    bulkInsert(entities: TEntity[], include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>;
    /**  */
    update(entity: TEntity): Promise<number>;
    /**  */
    update(entity: TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>;
    updateAll(data: any, map: (value: TEntity) => unknown, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>;
    /**  */
    merge(entity: TEntity): Promise<number>;
    /**  */
    merge(entity: TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>;
    /**  */
    delete(entity: TEntity): Promise<number>;
    /**  */
    delete(entity: TEntity, include: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>;
    deleteAll(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<number>;
    list(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<TEntity[]>;
    distinct(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<any[]>;
    first(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<TEntity | null>;
    last(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<TEntity | null>;
    take(data: any, filter?: (value: TQuery, index: number, array: TQuery[]) => unknown, include?: (value: TQuery, index: number, array: TQuery[]) => unknown): Promise<TEntity | null>;
    query(): Queryable<TQuery>;
}
