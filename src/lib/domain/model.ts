/* eslint-disable no-use-before-define */

/**
 *
 * @export
 * @interface Constraint
 */
export interface Constraint {
	/**
	 *
	 * @type {string}
	 * @memberof Constraint
	 */
	'message': string;
	/**
	 *
	 * @type {string}
	 * @memberof Constraint
	 */
	'condition': string;
}
/**
*
* @export
* @interface DataSource
*/
export interface DataSource {
	/**
	 *
	 * @type {string}
	 * @memberof DataSource
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof DataSource
	 */
	'dialect': string;
	/**
	 *
	 * @type {string}
	 * @memberof DataSource
	 */
	'mapping': string;
	/**
	 *
	 * @type {any}
	 * @memberof DataSource
	 */
	'connection': any;
}
/**
*
* @export
* @interface Dependent
*/
export interface Dependent {
	/**
	 *
	 * @type {string}
	 * @memberof Dependent
	 */
	'entity': string;
	/**
	 *
	 * @type {Relation}
	 * @memberof Dependent
	 */
	'relation': Relation;
}
/**
*
* @export
* @interface Entity
*/
export interface Entity {
	/**
	 *
	 * @type {string}
	 * @memberof Entity
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof Entity
	 */
	'extends'?: string;
	/**
	 *
	 * @type {boolean}
	 * @memberof Entity
	 */
	'abstract'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof Entity
	 */
	'singular'?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Entity
	 */
	'uniqueKey': Array<string>;
	/**
	 *
	 * @type {Array<Index>}
	 * @memberof Entity
	 */
	'indexes': Array<Index>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Entity
	 */
	'primaryKey': Array<string>;
	/**
	 *
	 * @type {Array<Property>}
	 * @memberof Entity
	 */
	'properties': Array<Property>;
	/**
	 *
	 * @type {Array<Relation>}
	 * @memberof Entity
	 */
	'relations': Array<Relation>;
	/**
	 *
	 * @type {Array<Dependent>}
	 * @memberof Entity
	 */
	'dependents': Array<Dependent>;
	/**
	 *
	 * @type {Array<Constraint>}
	 * @memberof Entity
	 */
	'constraints'?: Array<Constraint>;
}
/**
*
* @export
* @interface EntityMapping
*/
export interface EntityMapping {
	/**
	 *
	 * @type {string}
	 * @memberof EntityMapping
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof EntityMapping
	 */
	'extends'?: string;
	/**
	 *
	 * @type {boolean}
	 * @memberof EntityMapping
	 */
	'abstract'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof EntityMapping
	 */
	'singular'?: string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof EntityMapping
	 */
	'uniqueKey': Array<string>;
	/**
	 *
	 * @type {Array<Index>}
	 * @memberof EntityMapping
	 */
	'indexes': Array<Index>;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof EntityMapping
	 */
	'primaryKey': Array<string>;
	/**
	 *
	 * @type {Array<PropertyMapping>}
	 * @memberof EntityMapping
	 */
	'properties': Array<PropertyMapping>;
	/**
	 *
	 * @type {Array<Relation>}
	 * @memberof EntityMapping
	 */
	'relations': Array<Relation>;
	/**
	 *
	 * @type {Array<Dependent>}
	 * @memberof EntityMapping
	 */
	'dependents': Array<Dependent>;
	/**
	 *
	 * @type {Array<Constraint>}
	 * @memberof EntityMapping
	 */
	'constraints'?: Array<Constraint>;
	/**
	 *
	 * @type {string}
	 * @memberof EntityMapping
	 */
	'mapping': string;
}
/**
*
* @export
* @interface Enum
*/
export interface Enum {
	/**
	 *
	 * @type {string}
	 * @memberof Enum
	 */
	'name': string;
	/**
	 *
	 * @type {Array<EnumValue>}
	 * @memberof Enum
	 */
	'values': Array<EnumValue>;
}
/**
*
* @export
* @interface EnumValue
*/
export interface EnumValue {
	/**
	 *
	 * @type {string}
	 * @memberof EnumValue
	 */
	'name': string;
	/**
	 *
	 * @type {any}
	 * @memberof EnumValue
	 */
	'value': any;
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
/**
*
* @export
* @interface Index
*/
export interface Index {
	/**
	 *
	 * @type {string}
	 * @memberof Index
	 */
	'name': string;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof Index
	 */
	'fields': Array<string>;
}
/**
*
* @export
* @interface Mapping
*/
export interface Mapping {
	/**
	 *
	 * @type {string}
	 * @memberof Mapping
	 */
	'extends'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Mapping
	 */
	'mapping'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Mapping
	 */
	'name': string;
	/**
	 *
	 * @type {Array<EntityMapping>}
	 * @memberof Mapping
	 */
	'entities': Array<EntityMapping>;
}
/**
*
* @export
* @interface Metadata
*/
export interface Metadata {
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'type': string;
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'entity'?: string;
	/**
	 *
	 * @type {Array<Metadata>}
	 * @memberof Metadata
	 */
	'children'?: Array<Metadata>;
	/**
	 *
	 * @type {Array<Property>}
	 * @memberof Metadata
	 */
	'fields'?: Array<Property>;
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'property'?: string;
	/**
	 *
	 * @type {Array<Parameter>}
	 * @memberof Metadata
	 */
	'parameters'?: Array<Parameter>;
	/**
	 *
	 * @type {Relation}
	 * @memberof Metadata
	 */
	'relation'?: Relation;
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'sentence'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Metadata
	 */
	'alias'?: string;
	/**
	 *
	 * @type {number}
	 * @memberof Metadata
	 */
	'number'?: number;
}
/**
*
* @export
* @interface MetadataConstraint
*/
export interface MetadataConstraint {
	/**
	 *
	 * @type {string}
	 * @memberof MetadataConstraint
	 */
	'entity': string;
	/**
	 *
	 * @type {Array<Constraint>}
	 * @memberof MetadataConstraint
	 */
	'constraints': Array<Constraint>;
	/**
	 *
	 * @type {Array<MetadataConstraint>}
	 * @memberof MetadataConstraint
	 */
	'children'?: Array<MetadataConstraint>;
}
/**
*
* @export
* @interface MetadataModel
*/
export interface MetadataModel {
	/**
	 *
	 * @type {string}
	 * @memberof MetadataModel
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof MetadataModel
	 */
	'type': string;
	/**
	 *
	 * @type {Array<MetadataModel>}
	 * @memberof MetadataModel
	 */
	'children'?: Array<MetadataModel>;
}
/**
*
* @export
* @interface MetadataParameter
*/
export interface MetadataParameter {
	/**
	 *
	 * @type {string}
	 * @memberof MetadataParameter
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof MetadataParameter
	 */
	'type': string;
	/**
	 *
	 * @type {Array<MetadataParameter>}
	 * @memberof MetadataParameter
	 */
	'children'?: Array<MetadataParameter>;
}
/**
*
* @export
* @interface MetadataPlan
*/
export interface MetadataPlan {
	/**
	 *
	 * @type {string}
	 * @memberof MetadataPlan
	 */
	'entity': string;
	/**
	 *
	 * @type {string}
	 * @memberof MetadataPlan
	 */
	'dialect': string;
	/**
	 *
	 * @type {string}
	 * @memberof MetadataPlan
	 */
	'dataSource': string;
	/**
	 *
	 * @type {string}
	 * @memberof MetadataPlan
	 */
	'sentence': string;
	/**
	 *
	 * @type {Array<MetadataPlan>}
	 * @memberof MetadataPlan
	 */
	'children'?: Array<MetadataPlan>;
}
/**
*
* @export
* @interface Parameter
*/
export interface Parameter {
	/**
	 *
	 * @type {string}
	 * @memberof Parameter
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof Parameter
	 */
	'type': string;
	/**
	 *
	 * @type {any}
	 * @memberof Parameter
	 */
	'value'?: any;
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
* @interface Property
*/
export interface Property {
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'type': string;
	/**
	 *
	 * @type {number}
	 * @memberof Property
	 */
	'length'?: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof Property
	 */
	'nullable'?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof Property
	 */
	'primaryKey'?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof Property
	 */
	'autoincrement'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'default'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'readValue'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'writeValue'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Property
	 */
	'enum'?: string;
}
/**
*
* @export
* @interface PropertyMapping
*/
export interface PropertyMapping {
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'type': string;
	/**
	 *
	 * @type {number}
	 * @memberof PropertyMapping
	 */
	'length'?: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof PropertyMapping
	 */
	'nullable'?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof PropertyMapping
	 */
	'primaryKey'?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof PropertyMapping
	 */
	'autoincrement'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'default'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'readValue'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'writeValue'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'enum'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'mapping': string;
	/**
	 *
	 * @type {string}
	 * @memberof PropertyMapping
	 */
	'key'?: string;
}
/**
*
* @export
* @interface QueryOptions
*/
export interface QueryOptions {
	/**
	 *
	 * @type {string}
	 * @memberof QueryOptions
	 */
	'stage'?: string;
	/**
	 *
	 * @type {string}
	 * @memberof QueryOptions
	 */
	'view'?: string;
	/**
	 *
	 * @type {number}
	 * @memberof QueryOptions
	 */
	'chunkSize'?: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof QueryOptions
	 */
	'tryAllCan'?: boolean;
}
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
	'expression': string;
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
	'expression': string;
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
* @interface Relation
*/
export interface Relation {
	/**
	 *
	 * @type {string}
	 * @memberof Relation
	 */
	'name': string;
	/**
	 *
	 * @type {RelationType}
	 * @memberof Relation
	 */
	'type': RelationType;
	/**
	 *
	 * @type {boolean}
	 * @memberof Relation
	 */
	'composite'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof Relation
	 */
	'from': string;
	/**
	 *
	 * @type {string}
	 * @memberof Relation
	 */
	'entity': string;
	/**
	 *
	 * @type {string}
	 * @memberof Relation
	 */
	'to': string;
	/**
	 *
	 * @type {boolean}
	 * @memberof Relation
	 */
	'weak'?: boolean;
	/**
	 *
	 * @type {string}
	 * @memberof Relation
	 */
	'target'?: string;
	/**
	 *
	 * @type {boolean}
	 * @memberof Relation
	 */
	'targetComposite'?: boolean;
}
/**
*
* @export
* @enum {string}
*/

export const RelationType = {
	OneToMany: 'oneToMany',
	ManyToOne: 'manyToOne',
	OneToOne: 'oneToOne'
} as const

export type RelationType = typeof RelationType[keyof typeof RelationType];

/**
*
* @export
* @interface RuleDataSource
*/
export interface RuleDataSource {
	/**
	 *
	 * @type {string}
	 * @memberof RuleDataSource
	 */
	'name': string;
	/**
	 *
	 * @type {string}
	 * @memberof RuleDataSource
	 */
	'condition'?: string;
}
/**
*
* @export
* @interface SchemaData
*/
export interface SchemaData {
	/**
	 *
	 * @type {Array<SchemaDataEntity>}
	 * @memberof SchemaData
	 */
	'entities': Array<SchemaDataEntity>;
}
/**
*
* @export
* @interface SchemaDataEntity
*/
export interface SchemaDataEntity {
	/**
	 *
	 * @type {string}
	 * @memberof SchemaDataEntity
	 */
	'entity': string;
	/**
	 *
	 * @type {Array<any>}
	 * @memberof SchemaDataEntity
	 */
	'rows': Array<any>;
}
/**
*
* @export
* @interface Stage
*/
export interface Stage {
	/**
	 *
	 * @type {string}
	 * @memberof Stage
	 */
	'name': string;
	/**
	 *
	 * @type {Array<RuleDataSource>}
	 * @memberof Stage
	 */
	'dataSources': Array<RuleDataSource>;
}

export interface SchemaDomain {
	/**
	 *
	 * @type {string}
	 * @memberof SchemaDomain
	 */
	'version': string;
	/**
	 *
	 * @type {Array<Entity>}
	 * @memberof SchemaDomain
	 */
	'entities': Array<Entity>
	/**
	 *
	 * @type {Array<Enum>}
	 * @memberof SchemaDomain
	 */
	'enums': Array<Enum>
}

export interface Schema {
	/**
	 *
	 * @type {string}
	 * @memberof Schema
	 */
	'version': string;
	/**
	 *
	 * @type {SchemaDomain}
	 * @memberof Schema
	 */
	'domain': Array<SchemaDomain>
}
