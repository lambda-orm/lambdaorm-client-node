import { IOrmClient } from './IOrm';
import { MetadataSentence, QueryOptions, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from './client';
/**
 * Facade through which you can access all the functionalities of the library.
 */
export declare class OrmClient implements IOrmClient {
    private static _instance;
    host: string;
    private configuration?;
    private expressionApi?;
    constructor(host?: string);
    /**
 * Singleton
 */
    static get instance(): OrmClient;
    init(host?: string): Promise<void>;
    end(): Promise<void>;
    /**
     * Get model of expression
     * @param expression query expression
     * @returns Model of expression
     */
    model(expression: Function): Promise<MetadataModel[]>;
    model(expression: string): Promise<MetadataModel[]>;
    /**
     * Get parameters of expression
     * @param expression query expression
     * @returns Parameters of expression
     */
    parameters(expression: Function): Promise<MetadataParameter[]>;
    parameters(expression: string): Promise<MetadataParameter[]>;
    /**
     * Get constraints of expression
     * @param expression query expression
     * @returns Constraints of expression
     */
    constraints(expression: Function): Promise<MetadataConstraint>;
    constraints(expression: string): Promise<MetadataConstraint>;
    /**
     * Get metadata of expression
     * @param expression query expression
     * @returns metadata of expression
     */
    metadata(expression: Function): Promise<Metadata>;
    metadata(expression: string): Promise<Metadata>;
    /**
     * Get getInfo of expression
     * @param expression query expression
     * @param options options of execution
     */
    sentence(expression: Function, options?: QueryOptions): Promise<MetadataSentence>;
    sentence(expression: string, options?: QueryOptions): Promise<MetadataSentence>;
    /**
     * Execute expression
     * @param expression query expression
     * @param data Data with variables
     * @param options options of execution
     * @returns Result of execution
     */
    execute(expression: Function, data?: any, options?: QueryOptions): Promise<any>;
    execute(expression: string, data?: any, options?: QueryOptions): Promise<any>;
    /**
     * Execute expression
     * @param expression query expression
     * @param data Data with variables
     * @param options options of execution
     * @returns Result of execution
     */
    executeQueued(expression: Function, topic: string, data?: any, chunk?: number, options?: QueryOptions): Promise<any>;
    executeQueued(expression: string, topic: string, data?: any, chunk?: number, options?: QueryOptions): Promise<any>;
    private solveOptions;
}
