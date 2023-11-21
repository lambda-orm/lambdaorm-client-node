import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DUMMY_BASE_URL, setSearchParams, toPathString, createRequestFunction } from './common'
import { RequestArgs, BaseAPI } from './base'
import { Configuration, Health, Ping } from '../../domain'

/**
 * GeneralApi - axios parameter creator
 * @export
 */
export const GeneralApiAxiosParamCreator = function (configuration: Configuration) {
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
		health: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/health'
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
		metrics: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/metrics'
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
		ping: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = '/ping'
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
* GeneralApi - functional programming interface
* @export
*/
export const GeneralApiFp = function (configuration: Configuration) {
	const localVarAxiosParamCreator = GeneralApiAxiosParamCreator(configuration)
	return {
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async version (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Health>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.version(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async health (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Health>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.health(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async metrics (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.metrics(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async ping (options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Ping>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.ping(options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		}
	}
}

/**
* GeneralApi - factory interface
* @export
*/
export const GeneralApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
	const localVarFp = GeneralApiFp(configuration)
	return {
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		version (options?: any): AxiosPromise<Health> {
			return localVarFp.version(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		health (options?: any): AxiosPromise<Health> {
			return localVarFp.health(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		metrics (options?: any): AxiosPromise<any> {
			return localVarFp.metrics(options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		ping (options?: any): AxiosPromise<Ping> {
			return localVarFp.ping(options).then((request) => request(axios, configuration.basePath))
		}
	}
}

/**
* GeneralApi - object-oriented interface
* @export
* @class GeneralApi
* @extends {BaseAPI}
*/
export class GeneralApi extends BaseAPI {
	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof GeneralApi
	 */
	public version (options?: AxiosRequestConfig) {
		return GeneralApiFp(this.configuration).version(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof GeneralApi
	 */
	public health (options?: AxiosRequestConfig) {
		return GeneralApiFp(this.configuration).health(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof GeneralApi
	 */
	public metrics (options?: AxiosRequestConfig) {
		return GeneralApiFp(this.configuration).metrics(options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof GeneralApi
	 */
	public ping (options?: AxiosRequestConfig) {
		return GeneralApiFp(this.configuration).ping(options).then((request) => request(this.axios, this.configuration.basePath))
	}
}
