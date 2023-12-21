import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, toPathString, createRequestFunction } from './common'
import { RequestArgs, BaseAPI } from './base'
import { Configuration } from '../../domain'
import { Enum, Source, Entity, EntityMapping, Mapping, Stage, Schema, DomainSchema } from 'lambdaorm-base'

/**
 * SchemaApi - axios parameter creator
 * @export
 */
export const SchemaApiAxiosParamCreator = function (configuration: Configuration) {
	return {
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		version: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/version'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		schema: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/schema'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		domain: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/domain'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		views: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/views'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},

		/**
			 *
			 * @param {string} _enum
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_enum: async (_enum: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter '_enum' is not null or undefined
			assertParamExists('_enum', '_enum', _enum)
			const localVarPath = '/enums/{enum}'
				.replace(`{${'enum'}}`, encodeURIComponent(String(_enum)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		dataSources: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/datasources'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {string} datasource
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		datasource: async (datasource: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'datasource' is not null or undefined
			assertParamExists('datasource', 'datasource', datasource)
			const localVarPath = '/datasources/{datasource}'
				.replace(`{${'datasource'}}`, encodeURIComponent(String(datasource)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entities: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/entities'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entity: async (entity: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'entity' is not null or undefined
			assertParamExists('entity', 'entity', entity)
			const localVarPath = '/entities/{entity}'
				.replace(`{${'entity'}}`, encodeURIComponent(String(entity)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entityMapping: async (mapping: string, entity: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'mapping' is not null or undefined
			assertParamExists('entityMapping', 'mapping', mapping)
			// verify required parameter 'entity' is not null or undefined
			assertParamExists('entityMapping', 'entity', entity)
			const localVarPath = '/mappings/{mapping}/{entity}'
				.replace(`{${'mapping'}}`, encodeURIComponent(String(mapping)))
				.replace(`{${'entity'}}`, encodeURIComponent(String(entity)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		enums: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/enums'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		mapping: async (mapping: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'mapping' is not null or undefined
			assertParamExists('mapping', 'mapping', mapping)
			const localVarPath = '/mappings/{mapping}'
				.replace(`{${'mapping'}}`, encodeURIComponent(String(mapping)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		mappings: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/mappings'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		stage: async (stage: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'stage' is not null or undefined
			assertParamExists('stage', 'stage', stage)
			const localVarPath = '/stages/{stage}'
				.replace(`{${'stage'}}`, encodeURIComponent(String(stage)))
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		stages: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/stages'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		}
	}
}

/**
* SchemaApi - functional programming interface
* @export
*/
export const SchemaApiFp = function (configuration: Configuration) {
	const localVarAxiosParamCreator = SchemaApiAxiosParamCreator(configuration)
	return {
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async version (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{version:string}>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.version(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async schema (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Schema>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.schema(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async domain (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DomainSchema>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.domain(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async views (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.views(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},

		/**
			 *
			 * @param {string} _enum
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async _enum (_enum: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Enum>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator._enum(_enum, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async dataSources (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Source>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.dataSources(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} datasource
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async datasource (datasource: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Source>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.datasource(datasource, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async entities (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Entity>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.entities(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async entity (entity: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Entity>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.entity(entity, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async entityMapping (mapping: string, entity: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntityMapping>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.entityMapping(mapping, entity, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async enums (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Enum>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.enums(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async mapping (mapping: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mapping>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.mapping(mapping, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async mappings (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Mapping>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.mappings(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async stage (stage: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Stage>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.stage(stage, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async stages (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Stage>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.stages(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		}
	}
}

/**
* SchemaApi - factory interface
* @export
*/
export const SchemaApiFactory = function (configuration: Configuration, axios?: AxiosInstance) {
	const localVarFp = SchemaApiFp(configuration)
	return {
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		version (options?: any): AxiosPromise<{version:string}> {
			return localVarFp.version(options).then((request) => request(axios, configuration.basePath))
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		schema (options?: any): AxiosPromise<Schema> {
			return localVarFp.schema(options).then((request) => request(axios, configuration.basePath))
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		domain (options?: any): AxiosPromise<DomainSchema> {
			return localVarFp.domain(options).then((request) => request(axios, configuration.basePath))
		},

		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		views (options?: any): AxiosPromise<Array<string>> {
			return localVarFp.views(options).then((request) => request(axios, configuration.basePath))
		},

		/**
			 *
			 * @param {string} _enum
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_enum (_enum: string, options?: any): AxiosPromise<Enum> {
			return localVarFp._enum(_enum, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		dataSources (options?: any): AxiosPromise<Array<Source>> {
			return localVarFp.dataSources(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} datasource
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		datasource (datasource: string, options?: any): AxiosPromise<Source> {
			return localVarFp.datasource(datasource, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entities (options?: any): AxiosPromise<Array<Entity>> {
			return localVarFp.entities(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entity (entity: string, options?: any): AxiosPromise<Entity> {
			return localVarFp.entity(entity, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {string} entity
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		entityMapping (mapping: string, entity: string, options?: any): AxiosPromise<EntityMapping> {
			return localVarFp.entityMapping(mapping, entity, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		enums (options?: any): AxiosPromise<Array<Enum>> {
			return localVarFp.enums(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} mapping
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		mapping (mapping: string, options?: any): AxiosPromise<Mapping> {
			return localVarFp.mapping(mapping, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		mappings (options?: any): AxiosPromise<Array<Mapping>> {
			return localVarFp.mappings(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		stage (stage: string, options?: any): AxiosPromise<Stage> {
			return localVarFp.stage(stage, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		stages (options?: any): AxiosPromise<Array<Stage>> {
			return localVarFp.stages(options).then((request) => request(axios, configuration.basePath))
		}
	}
}

/**
* SchemaApi - object-oriented interface
* @export
* @class SchemaApi
* @extends {BaseAPI}
*/
export class SchemaApi extends BaseAPI {
	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public version (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).version(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public schema (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).schema(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public domain (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).domain(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public views (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).views(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} _enum
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public _enum (_enum: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration)._enum(_enum, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public dataSources (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).dataSources(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} datasource
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public datasource (datasource: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).datasource(datasource, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public entities (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).entities(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} entity
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public entity (entity: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).entity(entity, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} mapping
	 * @param {string} entity
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public entityMapping (mapping: string, entity: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).entityMapping(mapping, entity, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public enums (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).enums(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} mapping
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public mapping (mapping: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).mapping(mapping, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public mappings (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).mappings(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} stage
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public stage (stage: string, options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).stage(stage, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof SchemaApi
	 */
	public stages (options?: AxiosRequestConfig) {
		return SchemaApiFp(this.configuration).stages(options).then((request) => request(this.axios, this.configuration.basePath))
	}
}
