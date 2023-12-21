/* eslint-disable @typescript-eslint/ban-types */

import { ExpressionApi } from '../api'
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
import { AxiosResponse } from 'axios'
import { expressions } from '3xpr'
import { ExpressionService } from '../../application/services'

export class ExpressionApiService implements ExpressionService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly expressionApi:ExpressionApi) {}

	/**
	 * Get model of expression
	 * @param expression query expression
	 * @returns Model of expression
	 */
	public async model(expression:Function): Promise<MetadataModel[]>
	public async model(expression:string): Promise<MetadataModel[]>
	public async model (expression: string|Function): Promise<MetadataModel[]> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const result:AxiosResponse<MetadataModel[], any> = await this.expressionApi.model({ expression: _expression })
		return result.data
	}

	/**
		 * Get parameters of expression
		 * @param expression query expression
		 * @returns Parameters of expression
		 */
	public async parameters(expression:Function): Promise<MetadataParameter[]>;
	public async parameters(expression:string): Promise<MetadataParameter[]>;
	public async parameters (expression: string|Function): Promise<MetadataParameter[]> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const result:AxiosResponse<MetadataParameter[], any> = await this.expressionApi.parameters({ expression: _expression })
		return result.data
	}

	/**
		 * Get constraints of expression
		 * @param expression query expression
		 * @returns Constraints of expression
		 */
	public async constraints(expression:Function): Promise<MetadataConstraint>;
	public async constraints(expression:string): Promise<MetadataConstraint>;
	public async constraints (expression: string|Function): Promise<MetadataConstraint> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const result:AxiosResponse<MetadataConstraint, any> = await this.expressionApi.constraints({ expression: _expression })
		return result.data
	}

	/**
		 * Get metadata of expression
		 * @param expression query expression
		 * @returns metadata of expression
		 */
	public async metadata(expression: Function): Promise<Metadata>
	public async metadata (expression:string):Promise<Metadata>
	public async metadata (expression: string|Function): Promise<Metadata> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const result:AxiosResponse<Metadata, any> = await this.expressionApi.metadata({ expression: _expression })
		return result.data
	}

	/**
		 * Get plan of expression
		 * @param expression query expression
		 * @param options options of execution
		 */
	public async plan(expression: Function, options?: QueryOptions): Promise<QueryPlan>;
	public async plan(expression: string, options?: QueryOptions): Promise<QueryPlan>;
	public async plan (expression: string|Function, options: QueryOptions|undefined): Promise<QueryPlan> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		const result:AxiosResponse<QueryPlan, any> = await this.expressionApi.plan({ expression: _expression, options: _options })
		return result.data
	}

	/**
		 * Execute expression
		 * @param expression query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	public async execute(expression: Function, data?: any, options?: QueryOptions):Promise<any>;
	public async execute(expression: string, data?: any, options?: QueryOptions):Promise<any>;
	public async execute (expression: string|Function, data: any = {}, options: QueryOptions|undefined = undefined): Promise<any> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		const result:AxiosResponse<any, any> = await this.expressionApi.execute({ expression: _expression, data, options: _options })
		return result.data
	}

	/**
		 * Execute expression
		 * @param expression query expression
		 * @param data Data with variables
		 * @param options options of execution
		 * @returns Result of execution
		 */
	public async executeQueued(expression: Function, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<any>;
	public async executeQueued(expression: string, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<any>;
	public async executeQueued (expression: string|Function, topic:string, data: any = {}, chunk?:number, options: QueryOptions|undefined = undefined): Promise<any> {
		const _expression = typeof expression !== 'string' ? this.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		const result:AxiosResponse<any, any> = await this.expressionApi.executeQueued({ expression: _expression, data, options: _options, topic, chunk })
		return result.data
	}

	private toExpression (expression:string|Function):string {
		return typeof expression !== 'string' ? expressions.convert(expression, 'function')[0] : expression
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
