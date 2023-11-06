/* eslint-disable @typescript-eslint/ban-types */
import {
	MetadataSentence, QueryOptions, Metadata, MetadataModel, MetadataConstraint,
	MetadataParameter
} from './client'

export interface IOrmClient
{
	host:string
	init (host?: string):Promise<void>
	end ():Promise<void>

	/**
		* Get model of expression
		* @returns Model of expression
		*/
	model(expression:Function): Promise<MetadataModel[]>
	model(expression:string): Promise<MetadataModel[]>

	/**
		* Get parameters of expression
		* @returns Parameters of expression
		*/
	parameters(expression:Function): Promise<MetadataParameter[]>
	parameters(expression: string): Promise<MetadataParameter[]>

	/**
	 * Get constraints of expression
	 * @returns Constraints of expression
	 */
	constraints(expression:Function): Promise<MetadataConstraint>
	constraints(expression:string): Promise<MetadataConstraint>

	/**
		* Get metadata of expression
		* @returns metadata of expression
		*/
	metadata(expression: Function): Promise<Metadata>
	metadata (expression:string):Promise<Metadata>

	/**
	 *
	 * @param expression
	 * @param stage
	 */
	sentence(expression: Function, options?: QueryOptions): Promise<MetadataSentence>
	sentence(expression: string, options?: QueryOptions): Promise<MetadataSentence>

	/**
		* Execute expression
		* @param data Data with variables
		* @param stage Stage name
	  * @param view View name
		* @returns Result of execution
		*/
	execute(expression: Function, data?: any, options?: QueryOptions):Promise<any>
	execute(expression: string, data?: any, options?: QueryOptions): Promise<any>

		/**
		* Execute expression
		* @param data Data with variables
		* @param stage Stage name
	  * @param view View name
		* @returns Result of execution
		*/
		executeQueued(expression: Function, topic:string, data?: any, chunk?:number, options?: QueryOptions):Promise<string>
		executeQueued(expression: string, topic:string, data?: any, chunk?:number, options?: QueryOptions): Promise<string>
}
