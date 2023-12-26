[Lambda ORM client](../README.md) / Orm

# Class: Orm

Facade through which you can access all the functionalities of the library.

## Implements

- [`IOrm`](../interfaces/IOrm.md)

## Table of contents

### Constructors

- [constructor](Orm.md#constructor)

### Properties

- [host](Orm.md#host)

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

• **new Orm**(`host?`): [`Orm`](Orm.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | `string` | `'http://localhost:9289'` |

#### Returns

[`Orm`](Orm.md)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L28)

## Properties

### host

• **host**: `string`

#### Implementation of

[IOrm](../interfaces/IOrm.md).[host](../interfaces/IOrm.md#host)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:21](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L21)

## Accessors

### general

• `get` **general**(): [`GeneralService`](../interfaces/GeneralService.md)

#### Returns

[`GeneralService`](../interfaces/GeneralService.md)

#### Implementation of

IOrm.general

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:57](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L57)

___

### schema

• `get` **schema**(): [`SchemaService`](../interfaces/SchemaService.md)

#### Returns

[`SchemaService`](../interfaces/SchemaService.md)

#### Implementation of

IOrm.schema

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:64](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L64)

___

### stage

• `get` **stage**(): [`StageService`](../interfaces/StageService.md)

#### Returns

[`StageService`](../interfaces/StageService.md)

#### Implementation of

IOrm.stage

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:71](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L71)

___

### instance

• `get` **instance**(): [`IOrm`](../interfaces/IOrm.md)

Singleton

#### Returns

[`IOrm`](../interfaces/IOrm.md)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:35](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L35)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Constraints of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:111](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L111)

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:112](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L112)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[end](../interfaces/IOrm.md#end)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:55](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L55)

___

### execute

▸ **execute**(`expression`, `data?`, `options?`): `Promise`\<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:155](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L155)

▸ **execute**(`expression`, `data?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:156](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L156)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |
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

[src/lib/infrastructure/adapters/orm.ts:171](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L171)

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[executeQueued](../interfaces/IOrm.md#executequeued)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:172](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L172)

___

### init

▸ **init**(`workspace`, `host?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `workspace` | `string` |
| `host?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[init](../interfaces/IOrm.md#init)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:42](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L42)

___

### metadata

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

metadata of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:125](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L125)

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:126](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L126)

___

### model

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Model of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:83](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L83)

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:84](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L84)

___

### parameters

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Parameters of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:97](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L97)

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:98](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L98)

___

### plan

▸ **plan**(`expression`, `options?`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

Get getInfo of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[plan](../interfaces/IOrm.md#plan)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:139](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L139)

▸ **plan**(`expression`, `options?`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[plan](../interfaces/IOrm.md#plan)

#### Defined in

[src/lib/infrastructure/adapters/orm.ts:140](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/2403c1f/src/lib/infrastructure/adapters/orm.ts#L140)
