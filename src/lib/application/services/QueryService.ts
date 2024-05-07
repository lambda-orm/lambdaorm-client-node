/* eslint-disable @typescript-eslint/ban-types */
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
export interface ClientQueryService {
	/**
	 * Get model of query
	 * @param query query
	 * @returns Model of query
	 */
	model (query: string|Function): Promise<MetadataModel[]>

	/**
		 * Get parameters of query
		 * @param query query expression
		 * @returns Parameters of query
		 */
	parameters (query: string|Function): Promise<MetadataParameter[]>

	/**
		 * Get constraints of query
		 * @param query query expression
		 * @returns Constraints of query
		 */
	constraints (query: string|Function): Promise<MetadataConstraint>

	/**
		 * Get metadata of query
		 * @param query query expression
		 * @returns metadata of query
		 */
	metadata (query: string|Function): Promise<Metadata>

	/**
		 * Get plan of query
		 * @param query query expression
		 * @param options options of query
		 */
	plan (query: string|Function, options: QueryOptions|undefined): Promise<QueryPlan>

	/**
		 * Execute query
		 * @param query query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	execute (query: string|Function, data: any, options?: QueryOptions): Promise<any>

	/**
		 * Execute query
		 * @param query query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	executeQueued (query: string|Function, topic:string, data: any, chunk?:number, options?: QueryOptions): Promise<any>
}
