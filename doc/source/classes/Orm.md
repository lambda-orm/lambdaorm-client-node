[Lambda ORM client](../README.md) / Orm

# Class: Orm

Facade through which you can access all the functionalities of the library.

## Implements

- [`IOrm`](../interfaces/IOrm.md)

## Table of contents

### Constructors

- [constructor](Orm.md#constructor)

### Properties

- [url](Orm.md#url)

### Accessors

- [general](Orm.md#general)
- [schema](Orm.md#schema)
- [stage](Orm.md#stage)
- [instance](Orm.md#instance)

### Methods

- [constraints](Orm.md#constraints)
- [end](Orm.md#end)
- [execute](Orm.md#execute)
- [executeQueued](Orm.md#executequeued)
- [init](Orm.md#init)
- [metadata](Orm.md#metadata)
- [model](Orm.md#model)
- [parameters](Orm.md#parameters)
- [plan](Orm.md#plan)

## Constructors

### constructor

• **new Orm**(`url?`): [`Orm`](Orm.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `'http://localhost:9289'` |

#### Returns

[`Orm`](Orm.md)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:27](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L27)

## Properties

### url

• **url**: `string`

#### Implementation of

[IOrm](../interfaces/IOrm.md).[url](../interfaces/IOrm.md#url)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:20](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L20)

## Accessors

### general

• `get` **general**(): [`ClientGeneralService`](../interfaces/ClientGeneralService.md)

#### Returns

[`ClientGeneralService`](../interfaces/ClientGeneralService.md)

#### Implementation of

IOrm.general

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:56](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L56)

___

### schema

• `get` **schema**(): [`ClientSchemaService`](../interfaces/ClientSchemaService.md)

#### Returns

[`ClientSchemaService`](../interfaces/ClientSchemaService.md)

#### Implementation of

IOrm.schema

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:63](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L63)

___

### stage

• `get` **stage**(): [`ClientStageService`](../interfaces/ClientStageService.md)

#### Returns

[`ClientStageService`](../interfaces/ClientStageService.md)

#### Implementation of

IOrm.stage

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:70](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L70)

___

### instance

• `get` **instance**(): [`IOrm`](../interfaces/IOrm.md)

Singleton

#### Returns

[`IOrm`](../interfaces/IOrm.md)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:34](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L34)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Get constraints of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Constraints of query

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:110](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L110)

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:111](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L111)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[end](../interfaces/IOrm.md#end)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:54](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L54)

___

### execute

▸ **execute**(`query`, `data?`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:154](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L154)

▸ **execute**(`query`, `data?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:155](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L155)

___

### executeQueued

▸ **executeQueued**(`query`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |
| `topic` | `string` | - |
| `data?` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Implementation of

[IOrm](../interfaces/IOrm.md).[executeQueued](../interfaces/IOrm.md#executequeued)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:170](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L170)

▸ **executeQueued**(`query`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[executeQueued](../interfaces/IOrm.md#executequeued)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:171](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L171)

___

### init

▸ **init**(`url?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[init](../interfaces/IOrm.md#init)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:41](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L41)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Get metadata of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

metadata of query

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:124](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L124)

▸ **metadata**(`query`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:125](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L125)

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Get model of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Model of query

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:82](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L82)

▸ **model**(`query`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:83](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L83)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Get parameters of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Parameters of query

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:96](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L96)

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:97](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L97)

___

### plan

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Get getInfo of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[plan](../interfaces/IOrm.md#plan)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:138](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L138)

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[plan](../interfaces/IOrm.md#plan)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:139](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/infrastructure/adapters/orm.ts#L139)
