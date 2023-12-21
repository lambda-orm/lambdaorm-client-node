import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common'
import { RequestArgs, BaseAPI } from './base'
import { Configuration } from '../../domain'
import { SchemaConfig } from 'lambdaorm-base'

/**
 * StageApi - axios parameter creator
 * @export
 */
export const StageApiAxiosParamCreator = function (configuration: Configuration) {
	return {
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_export: async (stage: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'stage' is not null or undefined
			assertParamExists('_export', 'stage', stage)
			const localVarPath = '/stages/{stage}/export'
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
			 * @param {string} stage
			 * @param {SchemaConfig} data
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_import: async (stage: string, data: SchemaConfig, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'stage' is not null or undefined
			assertParamExists('_import', 'stage', stage)
			// verify required parameter 'SchemaConfig' is not null or undefined
			assertParamExists('_import', 'data', data)
			const localVarPath = '/stages/{stage}/import'
				.replace(`{${'stage'}}`, encodeURIComponent(String(stage)))
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
			localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

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
		exists: async (stage: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'stage' is not null or undefined
			assertParamExists('exists', 'stage', stage)
			const localVarPath = '/stages/{stage}/exists'
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
		}
	}
}

/**
* StageApi - functional programming interface
* @export
*/
export const StageApiFp = function (configuration: Configuration) {
	const localVarAxiosParamCreator = StageApiAxiosParamCreator(configuration)
	return {
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async _export (stage: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchemaConfig>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator._export(stage, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} stage
			 * @param {SchemaConfig} data
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async _import (stage: string, data: SchemaConfig, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator._import(stage, data, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		},
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		async exists (stage: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.exists(stage, options)
			return createRequestFunction(localVarAxiosArgs, globalAxios, configuration)
		}
	}
}

/**
* StageApi - factory interface
* @export
*/
export const StageApiFactory = function (configuration: Configuration, basePath?: string, axios?: AxiosInstance) {
	const localVarFp = StageApiFp(configuration)
	return {
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_export (stage: string, options?: any): AxiosPromise<SchemaConfig> {
			return localVarFp._export(stage, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} stage
			 * @param {SchemaConfig} data
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		_import (stage: string, data: SchemaConfig, options?: any): AxiosPromise<any> {
			return localVarFp._import(stage, data, options).then((request) => request(axios, configuration.basePath))
		},
		/**
			 *
			 * @param {string} stage
			 * @param {*} [options] Override http request option.
			 * @throws {RequiredError}
			 */
		exists (stage: string, options?: any): AxiosPromise<boolean> {
			return localVarFp.exists(stage, options).then((request) => request(axios, configuration.basePath))
		}
	}
}

/**
* StageApi - object-oriented interface
* @export
* @class StageApi
* @extends {BaseAPI}
*/
export class StageApi extends BaseAPI {
	/**
	 *
	 * @param {string} stage
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof StageApi
	 */
	public _export (stage: string, options?: AxiosRequestConfig) {
		return StageApiFp(this.configuration)._export(stage, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} stage
	 * @param {SchemaConfig} data
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof StageApi
	 */
	public _import (stage: string, data: SchemaConfig, options?: AxiosRequestConfig) {
		return StageApiFp(this.configuration)._import(stage, data, options).then((request) => request(this.axios, this.configuration.basePath))
	}

	/**
	 *
	 * @param {string} stage
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof StageApi
	 */
	public exists (stage: string, options?: AxiosRequestConfig) {
		return StageApiFp(this.configuration).exists(stage, options).then((request) => request(this.axios, this.configuration.basePath))
	}
}
