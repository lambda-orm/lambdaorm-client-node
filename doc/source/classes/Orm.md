[Lambda ORM client](../README.md) / Orm

# Orm

Facade through which you can access all the functionalities of the library.

## Implements

- [`IOrm`](../interfaces/IOrm.md)

## Table of contents

### Constructors

- [constructor](Orm.md#constructor)

### Properties

- [host](Orm.md#host)

### Accessors

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
- [sentence](Orm.md#sentence)

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

[infrastructure/adapters/orm.ts:19](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L19)

## Properties

### host

• **host**: `string`

#### Implementation of

[IOrm](../interfaces/IOrm.md).[host](../interfaces/IOrm.md#host)

#### Defined in

[infrastructure/adapters/orm.ts:15](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L15)

## Accessors

### instance

• `get` **instance**(): [`IOrm`](../interfaces/IOrm.md)

Singleton

#### Returns

[`IOrm`](../interfaces/IOrm.md)

#### Defined in

[infrastructure/adapters/orm.ts:26](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L26)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

Constraints of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[infrastructure/adapters/orm.ts:82](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L82)

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[constraints](../interfaces/IOrm.md#constraints)

#### Defined in

[infrastructure/adapters/orm.ts:83](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L83)

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[end](../interfaces/IOrm.md#end)

#### Defined in

[infrastructure/adapters/orm.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L43)

___

### execute

▸ **execute**(`expression`, `data?`, `options?`): `Promise`<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`<`any`\>

Result of execution

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[infrastructure/adapters/orm.ts:133](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L133)

▸ **execute**(`expression`, `data?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[execute](../interfaces/IOrm.md#execute)

#### Defined in

[infrastructure/adapters/orm.ts:134](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L134)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`<`any`\>

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

`Promise`<`any`\>

Result of execution

#### Implementation of

[IOrm](../interfaces/IOrm.md).[executeQueued](../interfaces/IOrm.md#executequeued)

#### Defined in

[infrastructure/adapters/orm.ts:152](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L152)

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[executeQueued](../interfaces/IOrm.md#executequeued)

#### Defined in

[infrastructure/adapters/orm.ts:153](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L153)

___

### init

▸ **init**(`host?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host?` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[init](../interfaces/IOrm.md#init)

#### Defined in

[infrastructure/adapters/orm.ts:33](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L33)

___

### metadata

▸ **metadata**(`expression`): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

metadata of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[infrastructure/adapters/orm.ts:98](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L98)

▸ **metadata**(`expression`): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[metadata](../interfaces/IOrm.md#metadata)

#### Defined in

[infrastructure/adapters/orm.ts:99](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L99)

___

### model

▸ **model**(`expression`): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

Model of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[infrastructure/adapters/orm.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L50)

▸ **model**(`expression`): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[model](../interfaces/IOrm.md#model)

#### Defined in

[infrastructure/adapters/orm.ts:51](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L51)

___

### parameters

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

Parameters of expression

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[infrastructure/adapters/orm.ts:66](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L66)

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[parameters](../interfaces/IOrm.md#parameters)

#### Defined in

[infrastructure/adapters/orm.ts:67](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L67)

___

### sentence

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

Get getInfo of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | query expression |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) | options of execution |

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[sentence](../interfaces/IOrm.md#sentence)

#### Defined in

[infrastructure/adapters/orm.ts:114](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L114)

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Implementation of

[IOrm](../interfaces/IOrm.md).[sentence](../interfaces/IOrm.md#sentence)

#### Defined in

[infrastructure/adapters/orm.ts:115](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/infrastructure/adapters/orm.ts#L115)
