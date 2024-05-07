/* eslint-disable @typescript-eslint/ban-types */
import { QueryOptions, QueryPlan, Metadata, MetadataModel, MetadataConstraint, MetadataParameter } from 'lambdaorm-base'
import { ClientGeneralService } from './services/GeneralService'
import { ClientStageService } from './services/StageService'
import { ClientSchemaService } from './services/SchemaService'

export interface IOrm
{
	url:string
	init (url?: string):Promise<void>
	end ():Promise<void>

	get general (): ClientGeneralService
	get schema (): ClientSchemaService
	get stage (): ClientStageService
	/**
		* Get model of query
		* @returns Model of query
		*/
	model(query:Function): Promise<MetadataModel[]>
	model(query:string): Promise<MetadataModel[]>

	/**
		* Get parameters of query
		* @param query query expression
		* @returns Parameters of query
		*/
	parameters(query:Function): Promise<MetadataParameter[]>
	parameters(query: string): Promise<MetadataParameter[]>

	/**
	 * Get constraints of query
	 * @param query query expression
	 * @returns Constraints of query
	 */
	constraints(query:Function): Promise<MetadataConstraint>
	constraints(query:string): Promise<MetadataConstraint>

	/**
		* Get metadata of query
		* @param query query expression
		* @returns metadata of query
		*/
	metadata(query: Function): Promise<Metadata>
	metadata (query:string):Promise<Metadata>

	/**
	 * Plan query
	 * @param query
	 * @param options
	 */
	plan(query: Function, options?: QueryOptions): Promise<QueryPlan>
	plan(query: string, options?: QueryOptions): Promise<QueryPlan>

	/**
		* Execute query
		* @param query query expression
		* @param data Data with variables
		* @param options query options
		* @returns Result of execution
		*/
	execute(query: Function, data?: any, options?: QueryOptions):Promise<any>
	execute(query: string, data?: any, options?: QueryOptions): Promise<any>

		/**
		* Execute query
		* @param query query expression
		* @param data Data with variables
		* @param options query options
		* @returns Result of execution
		*/
		executeQueued(query: Function, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<string>
		executeQueued(query: string, topic:string, data?: any, chunk?:number, options?: QueryOptions): Promise<string>
}
