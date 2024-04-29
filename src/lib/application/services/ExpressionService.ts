/* eslint-disable @typescript-eslint/ban-types */
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
export interface ClientExpressionService {
	/**
	 * Get model of expression
	 * @param expression query expression
	 * @returns Model of expression
	 */
	model (expression: string|Function): Promise<MetadataModel[]>

	/**
		 * Get parameters of expression
		 * @param expression query expression
		 * @returns Parameters of expression
		 */
	parameters (expression: string|Function): Promise<MetadataParameter[]>

	/**
		 * Get constraints of expression
		 * @param expression query expression
		 * @returns Constraints of expression
		 */
	constraints (expression: string|Function): Promise<MetadataConstraint>

	/**
		 * Get metadata of expression
		 * @param expression query expression
		 * @returns metadata of expression
		 */
	metadata (expression: string|Function): Promise<Metadata>

	/**
		 * Get plan of expression
		 * @param expression query expression
		 * @param options options of execution
		 */
	plan (expression: string|Function, options: QueryOptions|undefined): Promise<QueryPlan>

	/**
		 * Execute expression
		 * @param expression query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	execute (expression: string|Function, data: any, options?: QueryOptions): Promise<any>

	/**
		 * Execute expression
		 * @param expression query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	executeQueued (expression: string|Function, topic:string, data: any, chunk?:number, options?: QueryOptions): Promise<any>
}
