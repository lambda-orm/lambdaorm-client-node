import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common'
import { RequestArgs, BaseAPI } from './base'
import { Configuration, QueryRequest, MetadataConstraint, QueryQueuedRequest, Metadata, MetadataModel, MetadataParameter, MetadataPlan } from '../../domain'

/**
 * ExpressionApi - axios parameter creator
 * @export
 */
export const ExpressionApiAxiosParamCreator = function (configuration: Configuration) {
	return {
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		constraints: async (queryRequest?: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/constraints'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		execute: async (queryRequest: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'queryRequest' is not null or undefined
			assertParamExists('execute', 'queryRequest', queryRequest)
			const localVarPath = '/execute'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		metadata: async (queryRequest?: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/metadata'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		model: async (queryRequest?: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/model'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		parameters: async (queryRequest?: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/parameters'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		plan: async (queryRequest: QueryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'queryRequest' is not null or undefined
			assertParamExists('plan', 'queryRequest', queryRequest)
			const localVarPath = '/plan'
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
			let baseOptions
			if (configuration) {
				baseOptions = configuration.baseOptions
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
			const localVarHeaderParameter = {} as any
			const localVarQueryParameter = {} as any

			localVarHeaderParameter['Content-Type'] = 'application/json'

			setSearchParams(localVarUrlObj, localVarQueryParameter)
			const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
			localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
			localVarRequestOptions.data = serializeDataIfNeeded(queryRequest, localVarRequestOptions, configuration)

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			}
		}
	}
}

/**
* ExpressionApi - functional programming interface
* @export
*/
export const ExpressionApiFp = function (configuration: Configuration) {
	const localVarAxiosParamCreator = ExpressionApiAxiosParamCreator(configuration)
	return {
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async constraints (queryRequest?: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataConstraint>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.constraints(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async execute (queryRequest: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.execute(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async executeQueued (queryQueuedRequest: QueryQueuedRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.execute(queryQueuedRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async metadata (queryRequest?: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Metadata>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.metadata(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async model (queryRequest?: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MetadataModel>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.model(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async parameters (queryRequest?: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MetadataParameter>>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.parameters(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async plan (queryRequest: QueryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetadataPlan>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.plan(queryRequest, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		}
	}
}

/**
* ExpressionApi - factory interface
* @export
*/
export const ExpressionApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
	const localVarFp = ExpressionApiFp(configuration)
	return {
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		constraints (queryRequest?: QueryRequest, options?: any): AxiosPromise<MetadataConstraint> {
			return localVarFp.constraints(queryRequest, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		execute (queryRequest: QueryRequest, options?: any): AxiosPromise<any> {
			return localVarFp.execute(queryRequest, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		metadata (queryRequest?: QueryRequest, options?: any): AxiosPromise<Metadata> {
			return localVarFp.metadata(queryRequest, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		model (queryRequest?: QueryRequest, options?: any): AxiosPromise<Array<MetadataModel>> {
			return localVarFp.model(queryRequest, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {QueryRequest} [queryRequest]
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		parameters (queryRequest?: QueryRequest, options?: any): AxiosPromise<Array<MetadataParameter>> {
			return localVarFp.parameters(queryRequest, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {QueryRequest} queryRequest
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		plan (queryRequest: QueryRequest, options?: any): AxiosPromise<MetadataPlan> {
			return localVarFp.plan(queryRequest, options).then((request) => request(axios, configuration.basePath))
		}
	}
}

/**
* ExpressionApi - object-oriented interface
* @export
* @class ExpressionApi
* @extends {BaseAPI}
*/
export class ExpressionApi extends BaseAPI {
	/**
	 *
	 * @param {QueryRequest} [queryRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public constraints (queryRequest?: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).constraints(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryRequest} queryRequest
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public execute (queryRequest: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).execute(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryQueuedRequest} queryQueuedRequest
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public executeQueued (queryQueuedRequest: QueryQueuedRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).execute(queryQueuedRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryRequest} [queryRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public metadata (queryRequest?: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).metadata(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryRequest} [queryRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public model (queryRequest?: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).model(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryRequest} [queryRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public parameters (queryRequest?: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).parameters(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {QueryRequest} queryRequest
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof ExpressionApi
	 */
	public plan (queryRequest: QueryRequest, options?: AxiosRequestConfig) {
		return ExpressionApiFp(this.configuration).plan(queryRequest, options).then((request) => request(this.axios, this.configuration.basePath))
	}
}
