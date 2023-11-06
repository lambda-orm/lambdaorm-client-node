import { MetadataSentence, MetadataParameter, MetadataModel, MetadataConstraint, Metadata } from '../client';
import { IOrmClient } from '../IOrm';
export declare class ExpressionActions {
    private orm;
    private name;
    private stage;
    constructor(name: string, orm: IOrmClient, stage?: string);
    model(expression: string): Promise<MetadataModel[]>;
    parameters(expression: string): Promise<MetadataParameter[]>;
    constraints(expression: string): Promise<MetadataConstraint>;
    metadata(expression: string): Promise<Metadata>;
    sentence(expression: string): Promise<MetadataSentence>;
    execute(expression: string, data: any): Promise<any>;
    executeQueued(expression: string, topic: string, data: any, chunk?: number): Promise<any>;
}
