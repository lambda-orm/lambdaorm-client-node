import { QueryOptions } from 'lambdaorm-base'
/**
*
* @export
* @interface QueryRequest
*/
export interface QueryRequest {
/**
 *
 * @type {QueryOptions}
 * @memberof QueryRequest
 */
'options'?: QueryOptions;
/**
 *
 * @type {string}
 * @memberof QueryRequest
 */
'query': string;
/**
 *
 * @type {any}
 * @memberof QueryRequest
 */
'data'?: any;
}
/**
*
* @export
* @interface QueryRequest
*/
export interface QueryQueuedRequest {
/**
 *
 * @type {QueryOptions}
 * @memberof QueryQueuedRequest
 */
'options'?: QueryOptions;
/**
 *
 * @type {string}
 * @memberof QueryQueuedRequest
 */
'query': string;
/**
 *
 * @type {any}
 * @memberof QueryQueuedRequest
 */
'data'?: any;
/**
 *
 * @type {string}
 * @memberof QueryQueuedRequest
 */
'topic': string;
/**
 *
 * @type {number}
 * @memberof QueryQueuedRequest
 */
'chunk'?: number;
}
/**
*
* @export
* @interface QueryResponse
*/
export interface QueryResponse {
/**
 *
 * @type {any}
 * @memberof QueryResponse
 */
'result': any;
}

/**
*
* @export
* @interface Ping
*/
export interface Ping {
/**
 *
 * @type {string}
 * @memberof Ping
 */
'message': string;
/**
 *
 * @type {string}
 * @memberof Ping
 */
'time': string;
}

/**
*
* @export
* @interface Health
*/
export interface Health {
/**
 *
 * @type {string}
 * @memberof Health
 */
'message': string;
/**
 *
 * @type {string}
 * @memberof Health
 */
'time': string;
/**
 *
 * @type {number}
 * @memberof Health
 */
'uptime': number;
}
