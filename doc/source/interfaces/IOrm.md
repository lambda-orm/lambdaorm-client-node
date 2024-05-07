[Lambda ORM client](../README.md) / IOrm

# Interface: IOrm

## Implemented by

- [`Orm`](../classes/Orm.md)

## Table of contents

### Properties

- [url](IOrm.md#url)

### Accessors

- [general](IOrm.md#general)
- [schema](IOrm.md#schema)
- [stage](IOrm.md#stage)

### Methods

- [constraints](IOrm.md#constraints)
- [end](IOrm.md#end)
- [execute](IOrm.md#execute)
- [executeQueued](IOrm.md#executequeued)
- [init](IOrm.md#init)
- [metadata](IOrm.md#metadata)
- [model](IOrm.md#model)
- [parameters](IOrm.md#parameters)
- [plan](IOrm.md#plan)

## Properties

### url

• **url**: `string`

#### Defined in

[src/lib/application/IOrm.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L9)

## Accessors

### general

• `get` **general**(): [`ClientGeneralService`](ClientGeneralService.md)

#### Returns

[`ClientGeneralService`](ClientGeneralService.md)

#### Defined in

[src/lib/application/IOrm.ts:13](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L13)

___

### schema

• `get` **schema**(): [`ClientSchemaService`](ClientSchemaService.md)

#### Returns

[`ClientSchemaService`](ClientSchemaService.md)

#### Defined in

[src/lib/application/IOrm.ts:14](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L14)

___

### stage

• `get` **stage**(): [`ClientStageService`](ClientStageService.md)

#### Returns

[`ClientStageService`](ClientStageService.md)

#### Defined in

[src/lib/application/IOrm.ts:15](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L15)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of query

#### Defined in

[src/lib/application/IOrm.ts:36](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L36)

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[src/lib/application/IOrm.ts:37](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L37)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/application/IOrm.ts:11](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L11)

___

### execute

▸ **execute**(`query`, `data?`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | query options |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:62](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L62)

▸ **execute**(`query`, `data?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/application/IOrm.ts:63](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L63)

___

### executeQueued

▸ **executeQueued**(`query`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`string`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |
| `topic` | `string` | - |
| `data?` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | query options |

#### Returns

`Promise`\<`string`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:72](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L72)

▸ **executeQueued**(`query`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/application/IOrm.ts:73](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L73)

___

### init

▸ **init**(`url?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/application/IOrm.ts:10](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L10)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

Get metadata of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

metadata of query

#### Defined in

[src/lib/application/IOrm.ts:44](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L44)

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

[src/lib/application/IOrm.ts:45](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L45)

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Get model of query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Model of query

#### Defined in

[src/lib/application/IOrm.ts:20](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L20)

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:21](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L21)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of query

#### Defined in

[src/lib/application/IOrm.ts:28](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L28)

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:29](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L29)

___

### plan

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

Plan query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:52](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L52)

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:53](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/IOrm.ts#L53)
