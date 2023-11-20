import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, toPathString, createRequestFunction } from './common'
import { RequestArgs, BaseAPI } from './base'
import { Configuration, Enum, DataSource, Entity, EntityMapping, Mapping, Stage } from '../../domain'

/**
 * SchemaApi - axios parameter creator
 * @export
 */
export const SchemaApiAxiosParamCreator = function (configuration: Configuration) {
	return {
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
		async dataSources (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DataSource>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.dataSources(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} datasource
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async datasource (datasource: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataSource>> {
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
		dataSources (options?: any): AxiosPromise<Array<DataSource>> {
			return localVarFp.dataSources(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} datasource
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		datasource (datasource: string, options?: any): AxiosPromise<DataSource> {
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