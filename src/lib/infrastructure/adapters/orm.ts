/* eslint-disable @typescript-eslint/ban-types */

import { IOrm, ClientExpressionService, ClientGeneralService, ClientStageService, ClientSchemaService } from '../../application'
import { Configuration } from '../../domain'
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
import { expressions } from '3xpr'
import { SentenceLibrary } from '..'
import { ExpressionApi, GeneralApi, SchemaApi, StageApi } from '../api'
import { ExpressionApiService } from './ExpressionApiService'
import { GeneralApiService } from './GeneralApiService'
import { SchemaApiService } from './SchemaApiService'
import { StageApiService } from './StageApiService'

/**
 * Facade through which you can access all the functionalities of the library.
 */
export class Orm implements IOrm {
	// eslint-disable-next-line no-use-before-define
	private static _instance: Orm
	public url: string
	private configuration?:Configuration
	private expressionService?: ClientExpressionService
	private generalService?: ClientGeneralService
	private schemaService?: ClientSchemaService
	private stageService?: ClientStageService

	constructor (url = 'http://localhost:9289') {
		this.url = url
	}

	/**
 * Singleton
 */
	public static get instance (): IOrm {
		if (!this._instance) {
			this._instance = new Orm()
		}
		return this._instance
	}

	public async init (url?: string): Promise<void> {
		if (url) {
			this.url = url
		}
		new SentenceLibrary(expressions).load()
		this.configuration = new Configuration({ basePath: this.url })
		this.expressionService = new ExpressionApiService(new ExpressionApi(this.configuration))
		this.generalService = new GeneralApiService(new GeneralApi(this.configuration))
		this.schemaService = new SchemaApiService(new SchemaApi(this.configuration))
		this.stageService = new StageApiService(new StageApi(this.configuration))
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async end (): Promise<void> {}

	public get general (): ClientGeneralService {
		if (!this.generalService) {
			throw new Error('Orm not initialized')
		}
		return this.generalService
	}

	public get schema (): ClientSchemaService {
		if (!this.schemaService) {
			throw new Error('Orm not initialized')
		}
		return this.schemaService
	}

	public get stage (): ClientStageService {
		if (!this.stageService) {
			throw new Error('Orm not initialized')
		}
		return this.stageService
	}

	/**
	 * Get model of expression
	 * @param expression query expression
	 * @returns Model of expression
	 */
	public async model(expression:Function): Promise<MetadataModel[]>
	public async model(expression:string): Promise<MetadataModel[]>
	public async model (expression: string|Function): Promise<MetadataModel[]> {
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.model(expression)
	}

	/**
	 * Get parameters of expression
	 * @param expression query expression
	 * @returns Parameters of expression
	 */
	public async parameters(expression:Function): Promise<MetadataParameter[]>;
	public async parameters(expression:string): Promise<MetadataParameter[]>;
	public async parameters (expression: string|Function): Promise<MetadataParameter[]> {
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.parameters(expression)
	}

	/**
	 * Get constraints of expression
	 * @param expression query expression
	 * @returns Constraints of expression
	 */
	public async constraints(expression:Function): Promise<MetadataConstraint>;
	public async constraints(expression:string): Promise<MetadataConstraint>;
	public async constraints (expression: string|Function): Promise<MetadataConstraint> {
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.constraints(expression)
	}

	/**
	 * Get metadata of expression
	 * @param expression query expression
	 * @returns metadata of expression
	 */
	public async metadata(expression: Function): Promise<Metadata>
	public async metadata (expression:string):Promise<Metadata>
	public async metadata (expression: string|Function): Promise<Metadata> {
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.metadata(expression)
	}

	/**
	 * Get getInfo of expression
	 * @param expression query expression
	 * @param options options of execution
	 */
	public async plan(expression: Function, options?: QueryOptions): Promise<QueryPlan>;
	public async plan(expression: string, options?: QueryOptions): Promise<QueryPlan>;
	public async plan (expression: string|Function, options: QueryOptions|undefined): Promise<QueryPlan> {
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.plan(expression, options)
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
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.execute(expression, data, options)
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
		if (!this.expressionService) {
			throw new Error('Orm not initialized')
		}
		return this.expressionService.executeQueued(expression, data, options)
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
