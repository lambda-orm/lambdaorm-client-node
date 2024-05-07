/* eslint-disable @typescript-eslint/ban-types */

import { QueryApi } from '../api'
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
import { AxiosResponse } from 'axios'
import { expressions } from '3xpr'
import { ClientQueryService } from '../../application/services'

export class QueryApiService implements ClientQueryService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly queryApi:QueryApi) {}

	/**
	 * Get model of query
	 * @param query query expression
	 * @returns Model of query
	 */
	public async model(query:Function): Promise<MetadataModel[]>
	public async model(query:string): Promise<MetadataModel[]>
	public async model (query: string|Function): Promise<MetadataModel[]> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const result:AxiosResponse<MetadataModel[], any> = await this.queryApi.model({ query: _query })
		return result.data
	}

	/**
		 * Get parameters of query
		 * @param query query expression
		 * @returns Parameters of query
		 */
	public async parameters(query:Function): Promise<MetadataParameter[]>;
	public async parameters(query:string): Promise<MetadataParameter[]>;
	public async parameters (query: string|Function): Promise<MetadataParameter[]> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const result:AxiosResponse<MetadataParameter[], any> = await this.queryApi.parameters({ query: _query })
		return result.data
	}

	/**
		 * Get constraints of query
		 * @param query query expression
		 * @returns Constraints of query
		 */
	public async constraints(query:Function): Promise<MetadataConstraint>;
	public async constraints(query:string): Promise<MetadataConstraint>;
	public async constraints (query: string|Function): Promise<MetadataConstraint> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const result:AxiosResponse<MetadataConstraint, any> = await this.queryApi.constraints({ query: _query })
		return result.data
	}

	/**
		 * Get metadata of query
		 * @param query query expression
		 * @returns metadata of query
		 */
	public async metadata(query: Function): Promise<Metadata>
	public async metadata (query:string):Promise<Metadata>
	public async metadata (query: string|Function): Promise<Metadata> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const result:AxiosResponse<Metadata, any> = await this.queryApi.metadata({ query: _query })
		return result.data
	}

	/**
		 * Get plan of query
		 * @param query query expression
		 * @param options options of query
		 */
	public async plan(query: Function, options?: QueryOptions): Promise<QueryPlan>;
	public async plan(query: string, options?: QueryOptions): Promise<QueryPlan>;
	public async plan (query: string|Function, options: QueryOptions|undefined): Promise<QueryPlan> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const _options = this.solveOptions(options)
		const result:AxiosResponse<QueryPlan, any> = await this.queryApi.plan({ query: _query, options: _options })
		return result.data
	}

	/**
		 * Execute query
		 * @param query query expression
		 * @param data Data with variables
		 * @param options options of query
		 * @returns Result of query
		 */
	public async execute(query: Function, data?: any, options?: QueryOptions):Promise<any>;
	public async execute(query: string, data?: any, options?: QueryOptions):Promise<any>;
	public async execute (query: string|Function, data: any = {}, options: QueryOptions|undefined = undefined): Promise<any> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const _options = this.solveOptions(options)
		const result:AxiosResponse<any, any> = await this.queryApi.execute({ query: _query, data, options: _options })
		return result.data
	}

	/**
		 * Execute query
		 * @param query query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	public async executeQueued(query: Function, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<any>;
	public async executeQueued(query: string, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<any>;
	public async executeQueued (query: string|Function, topic:string, data: any = {}, chunk?:number, options: QueryOptions|undefined = undefined): Promise<any> {
		const _query = typeof query !== 'string' ? this.toExpression(query) : query
		const _options = this.solveOptions(options)
		const result:AxiosResponse<any, any> = await this.queryApi.executeQueued({ query: _query, data, options: _options, topic, chunk })
		return result.data
	}

	private toExpression (query:string|Function):string {
		return typeof query !== 'string' ? expressions.convert(query, 'function')[0] : query
	}

	private solveOptions (options?: QueryOptions):QueryOptions {
		if (!options) {
			options = {}
		}
		if (!options.stage) {
			options.stage = 'default'
		}
		if (!options.view) {
			options.view = 'default'
		}
		return options
	}
}
