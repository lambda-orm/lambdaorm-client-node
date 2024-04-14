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

[src/lib/application/IOrm.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L9)

## Accessors

### general

• `get` **general**(): [`GeneralService`](GeneralService.md)

#### Returns

[`GeneralService`](GeneralService.md)

#### Defined in

[src/lib/application/IOrm.ts:13](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L13)

___

### schema

• `get` **schema**(): [`SchemaService`](SchemaService.md)

#### Returns

[`SchemaService`](SchemaService.md)

#### Defined in

[src/lib/application/IOrm.ts:14](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L14)

___

### stage

• `get` **stage**(): [`StageService`](StageService.md)

#### Returns

[`StageService`](StageService.md)

#### Defined in

[src/lib/application/IOrm.ts:15](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L15)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of expression

#### Defined in

[src/lib/application/IOrm.ts:34](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L34)

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[src/lib/application/IOrm.ts:35](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L35)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/application/IOrm.ts:11](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L11)

___

### execute

▸ **execute**(`expression`, `data?`, `options?`): `Promise`\<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | - |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | - |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:59](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L59)

▸ **execute**(`expression`, `data?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/application/IOrm.ts:60](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L60)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`string`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | - |
| `topic` | `string` | - |
| `data?` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | - |

#### Returns

`Promise`\<`string`\>

Result of execution

#### Defined in

[src/lib/application/IOrm.ts:69](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L69)

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/lib/application/IOrm.ts:70](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L70)

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

[src/lib/application/IOrm.ts:10](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L10)

___

### metadata

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

metadata of expression

#### Defined in

[src/lib/application/IOrm.ts:41](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L41)

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

[src/lib/application/IOrm.ts:42](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L42)

___

### model

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Model of expression

#### Defined in

[src/lib/application/IOrm.ts:20](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L20)

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:21](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L21)

___

### parameters

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of expression

#### Defined in

[src/lib/application/IOrm.ts:27](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L27)

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[src/lib/application/IOrm.ts:28](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L28)

___

### plan

▸ **plan**(`expression`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:49](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L49)

▸ **plan**(`expression`, `options?`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/IOrm.ts:50](https://github.com/lambda-orm/lambdaorm-client-node/blob/78b3d27/src/lib/application/IOrm.ts#L50)
