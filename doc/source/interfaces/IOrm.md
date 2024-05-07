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

[src/lib/application/IOrm.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L9)

## Accessors

### general

• `get` **general**(): [`ClientGeneralService`](ClientGeneralService.md)

#### Returns

[`ClientGeneralService`](ClientGeneralService.md)

#### Defined in

[src/lib/application/IOrm.ts:13](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L13)

___

### schema

• `get` **schema**(): [`ClientSchemaService`](ClientSchemaService.md)

#### Returns

[`ClientSchemaService`](ClientSchemaService.md)

#### Defined in

[src/lib/application/IOrm.ts:14](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L14)

___

### stage

• `get` **stage**(): [`ClientStageService`](ClientStageService.md)

#### Returns

[`ClientStageService`](ClientStageService.md)

#### Defined in

[src/lib/application/IOrm.ts:15](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L15)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of query

#### Defined in

[src/lib/application/IOrm.ts:34](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L34)

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[src/lib/application/IOrm.ts:35](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L35)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/application/IOrm.ts:11](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L11)

___

### execute

▸ **execute**(`query`, `data?`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | - |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | - |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:59](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L59)

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

[src/lib/application/IOrm.ts:60](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L60)

___

### executeQueued

▸ **executeQueued**(`query`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`string`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Function` | - |
| `topic` | `string` | - |
| `data?` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | - |

#### Returns

`Promise`\<`string`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:69](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L69)

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

[src/lib/application/IOrm.ts:70](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L70)

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

[src/lib/application/IOrm.ts:10](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L10)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

Get metadata of query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

metadata of query

#### Defined in

[src/lib/application/IOrm.ts:41](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L41)

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

[src/lib/application/IOrm.ts:42](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L42)

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

[src/lib/application/IOrm.ts:20](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L20)

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:21](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L21)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of query

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of query

#### Defined in

[src/lib/application/IOrm.ts:27](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L27)

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:28](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L28)

___

### plan

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Function` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:49](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L49)

▸ **plan**(`query`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:50](https://github.com/lambda-orm/lambdaorm-client-node/blob/0e0ab25480582c25bf330cef1a7ebb89f605f5a0/src/lib/application/IOrm.ts#L50)
