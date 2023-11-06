/* eslint-disable @typescript-eslint/ban-types */

import { IOrmClient } from './IOrm'
import { ExpressionApi, Configuration, MetadataSentence, QueryOptions, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from './client'
import { AxiosResponse } from 'axios'
import { expressions } from '3xpr'
import { SentenceLibrary } from './manager'

/**
 * Facade through which you can access all the functionalities of the library.
 */
export class OrmClient implements IOrmClient {
	// eslint-disable-next-line no-use-before-define
	private static _instance: OrmClient
	public host: string
	private configuration?:Configuration
	private expressionApi?: ExpressionApi

	constructor (host = 'http://localhost:9289') {
		this.host = host
	}

	/**
 * Singleton
 */
	public static get instance (): OrmClient {
		if (!this._instance) {
			this._instance = new OrmClient()
		}
		return this._instance
	}

	public async init (host?: string): Promise<void> {
		if (host) {
			this.host = host
		}
		new SentenceLibrary(expressions.model).load()
		this.configuration = new Configuration({ basePath: this.host })
		this.expressionApi = new ExpressionApi(this.configuration)
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async end (): Promise<void> {}

	/**
	 * Get model of expression
	 * @param expression query expression
	 * @returns Model of expression
	 */
	public async model(expression:Function): Promise<MetadataModel[]>
	public async model(expression:string): Promise<MetadataModel[]>
	public async model (expression: string|Function): Promise<MetadataModel[]> {
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
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
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
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
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
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
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
		const result:AxiosResponse<Metadata, any> = await this.expressionApi.metadata({ expression: _expression })
		return result.data
	}

	/**
	 * Get getInfo of expression
	 * @param expression query expression
	 * @param options options of execution
	 */
	public async sentence(expression: Function, options?: QueryOptions): Promise<MetadataSentence>;
	public async sentence(expression: string, options?: QueryOptions): Promise<MetadataSentence>;
	public async sentence (expression: string|Function, options: QueryOptions|undefined): Promise<MetadataSentence> {
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
		const result:AxiosResponse<MetadataSentence, any> = await this.expressionApi.sentence({ expression: _expression, options: _options })
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
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
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
		const _expression = typeof expression !== 'string' ? expressions.toExpression(expression) : expression
		const _options = this.solveOptions(options)
		if (!this.expressionApi) {
			throw new Error('Orm not initialized')
		}
		const result:AxiosResponse<any, any> = await this.expressionApi.executeQueued({ expression: _expression, data, options: _options, topic, chunk })
		return result.data
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
