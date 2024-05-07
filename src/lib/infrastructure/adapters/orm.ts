/* eslint-disable @typescript-eslint/ban-types */

import { IOrm, ClientQueryService, ClientGeneralService, ClientStageService, ClientSchemaService } from '../../application'
import { Configuration } from '../../domain'
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
import { expressions } from '3xpr'
import { SentenceLibrary } from '..'
import { QueryApi, GeneralApi, SchemaApi, StageApi } from '../api'
import { QueryApiService } from './QueryApiService'
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
	private queryService?: ClientQueryService
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
		this.queryService = new QueryApiService(new QueryApi(this.configuration))
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
	 * Get model of query
	 * @param query query expression
	 * @returns Model of query
	 */
	public async model(query:Function): Promise<MetadataModel[]>
	public async model(query:string): Promise<MetadataModel[]>
	public async model (query: string|Function): Promise<MetadataModel[]> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.model(query)
	}

	/**
	 * Get parameters of query
	 * @param query query expression
	 * @returns Parameters of query
	 */
	public async parameters(query:Function): Promise<MetadataParameter[]>;
	public async parameters(query:string): Promise<MetadataParameter[]>;
	public async parameters (query: string|Function): Promise<MetadataParameter[]> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.parameters(query)
	}

	/**
	 * Get constraints of query
	 * @param query query expression
	 * @returns Constraints of query
	 */
	public async constraints(query:Function): Promise<MetadataConstraint>;
	public async constraints(query:string): Promise<MetadataConstraint>;
	public async constraints (query: string|Function): Promise<MetadataConstraint> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.constraints(query)
	}

	/**
	 * Get metadata of query
	 * @param query query expression
	 * @returns metadata of query
	 */
	public async metadata(query: Function): Promise<Metadata>
	public async metadata (query:string):Promise<Metadata>
	public async metadata (query: string|Function): Promise<Metadata> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.metadata(query)
	}

	/**
	 * Get getInfo of query
	 * @param query query expression
	 * @param options options of execution
	 */
	public async plan(query: Function, options?: QueryOptions): Promise<QueryPlan>;
	public async plan(query: string, options?: QueryOptions): Promise<QueryPlan>;
	public async plan (query: string|Function, options: QueryOptions|undefined): Promise<QueryPlan> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.plan(query, options)
	}

	/**
	 * Execute query
	 * @param query query expression
	 * @param data Data with variables
	 * @param options options of execution
	 * @returns Result of execution
	 */
	public async execute(query: Function, data?: any, options?: QueryOptions):Promise<any>;
	public async execute(query: string, data?: any, options?: QueryOptions):Promise<any>;
	public async execute (query: string|Function, data: any = {}, options: QueryOptions|undefined = undefined): Promise<any> {
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.execute(query, data, options)
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
		if (!this.queryService) {
			throw new Error('Orm not initialized')
		}
		return this.queryService.executeQueued(query, data, options)
	}
}
