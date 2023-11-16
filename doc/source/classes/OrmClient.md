[Lambda ORM client](../README.md) / OrmClient

# Class: OrmClient

Facade through which you can access all the functionalities of the library.

## Implements

- [`IOrmClient`](../interfaces/IOrmClient.md)

## Table of contents

### Constructors

- [constructor](OrmClient.md#constructor)

### Properties

- [host](OrmClient.md#host)

### Accessors

- [instance](OrmClient.md#instance)

### Methods

- [constraints](OrmClient.md#constraints)
- [end](OrmClient.md#end)
- [execute](OrmClient.md#execute)
- [executeQueued](OrmClient.md#executequeued)
- [init](OrmClient.md#init)
- [metadata](OrmClient.md#metadata)
- [model](OrmClient.md#model)
- [parameters](OrmClient.md#parameters)
- [sentence](OrmClient.md#sentence)

## Constructors

### constructor

• **new OrmClient**(`host?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | `string` | `'http://localhost:9289'` |

#### Defined in

[orm.ts:19](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L19)

## Properties

### host

• **host**: `string`

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[host](../interfaces/IOrmClient.md#host)

#### Defined in

[orm.ts:15](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L15)

## Accessors

### instance

• `Static` `get` **instance**(): [`OrmClient`](OrmClient.md)

Singleton

#### Returns

[`OrmClient`](OrmClient.md)

#### Defined in

[orm.ts:26](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L26)

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

[IOrmClient](../interfaces/IOrmClient.md).[constraints](../interfaces/IOrmClient.md#constraints)

#### Defined in

[orm.ts:82](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L82)

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[constraints](../interfaces/IOrmClient.md#constraints)

#### Defined in

[orm.ts:83](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L83)

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[end](../interfaces/IOrmClient.md#end)

#### Defined in

[orm.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L43)

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

[IOrmClient](../interfaces/IOrmClient.md).[execute](../interfaces/IOrmClient.md#execute)

#### Defined in

[orm.ts:133](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L133)

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

[IOrmClient](../interfaces/IOrmClient.md).[execute](../interfaces/IOrmClient.md#execute)

#### Defined in

[orm.ts:134](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L134)

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

[IOrmClient](../interfaces/IOrmClient.md).[executeQueued](../interfaces/IOrmClient.md#executequeued)

#### Defined in

[orm.ts:152](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L152)

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

[IOrmClient](../interfaces/IOrmClient.md).[executeQueued](../interfaces/IOrmClient.md#executequeued)

#### Defined in

[orm.ts:153](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L153)

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

[IOrmClient](../interfaces/IOrmClient.md).[init](../interfaces/IOrmClient.md#init)

#### Defined in

[orm.ts:33](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L33)

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

[IOrmClient](../interfaces/IOrmClient.md).[metadata](../interfaces/IOrmClient.md#metadata)

#### Defined in

[orm.ts:98](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L98)

▸ **metadata**(`expression`): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[metadata](../interfaces/IOrmClient.md#metadata)

#### Defined in

[orm.ts:99](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L99)

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

[IOrmClient](../interfaces/IOrmClient.md).[model](../interfaces/IOrmClient.md#model)

#### Defined in

[orm.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L50)

▸ **model**(`expression`): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[model](../interfaces/IOrmClient.md#model)

#### Defined in

[orm.ts:51](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L51)

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

[IOrmClient](../interfaces/IOrmClient.md).[parameters](../interfaces/IOrmClient.md#parameters)

#### Defined in

[orm.ts:66](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L66)

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[parameters](../interfaces/IOrmClient.md#parameters)

#### Defined in

[orm.ts:67](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L67)

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

[IOrmClient](../interfaces/IOrmClient.md).[sentence](../interfaces/IOrmClient.md#sentence)

#### Defined in

[orm.ts:114](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L114)

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](../interfaces/QueryOptions.md) |

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Implementation of

[IOrmClient](../interfaces/IOrmClient.md).[sentence](../interfaces/IOrmClient.md#sentence)

#### Defined in

[orm.ts:115](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/orm.ts#L115)
