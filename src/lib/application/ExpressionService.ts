/* eslint-disable @typescript-eslint/ban-types */
import { MetadataSentence, QueryOptions, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from '../domain'
export interface ExpressionService {
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
		 * Get getInfo of expression
		 * @param expression query expression
		 * @param options options of execution
		 */
	sentence (expression: string|Function, options: QueryOptions|undefined): Promise<MetadataSentence>

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
