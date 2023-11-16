[Lambda ORM client](../README.md) / IOrmClient

# IOrmClient

## Implemented by

- [`OrmClient`](../classes/OrmClient.md)

## Table of contents

### Properties

- [host](IOrmClient.md#host)

### Methods

- [constraints](IOrmClient.md#constraints)
- [end](IOrmClient.md#end)
- [execute](IOrmClient.md#execute)
- [executeQueued](IOrmClient.md#executequeued)
- [init](IOrmClient.md#init)
- [metadata](IOrmClient.md#metadata)
- [model](IOrmClient.md#model)
- [parameters](IOrmClient.md#parameters)
- [sentence](IOrmClient.md#sentence)

## Properties

### host

• **host**: `string`

#### Defined in

[IOrm.ts:9](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L9)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of expression

#### Defined in

[IOrm.ts:31](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L31)

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[IOrm.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L32)

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[IOrm.ts:11](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L11)

___

### execute

▸ **execute**(`expression`, `data?`, `options?`): `Promise`<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `Function` | - |
| `data?` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | - |

#### Returns

`Promise`<`any`\>

Result of execution

#### Defined in

[IOrm.ts:56](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L56)

▸ **execute**(`expression`, `data?`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data?` | `any` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[IOrm.ts:57](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L57)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`<`string`\>

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

`Promise`<`string`\>

Result of execution

#### Defined in

[IOrm.ts:66](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L66)

▸ **executeQueued**(`expression`, `topic`, `data?`, `chunk?`, `options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[IOrm.ts:67](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L67)

___

### init

▸ **init**(`host?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[IOrm.ts:10](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L10)

___

### metadata

▸ **metadata**(`expression`): `Promise`<[`Metadata`](Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`<[`Metadata`](Metadata.md)\>

metadata of expression

#### Defined in

[IOrm.ts:38](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L38)

▸ **metadata**(`expression`): `Promise`<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`Metadata`](Metadata.md)\>

#### Defined in

[IOrm.ts:39](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L39)

___

### model

▸ **model**(`expression`): `Promise`<[`MetadataModel`](MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`<[`MetadataModel`](MetadataModel.md)[]\>

Model of expression

#### Defined in

[IOrm.ts:17](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L17)

▸ **model**(`expression`): `Promise`<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[IOrm.ts:18](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L18)

___

### parameters

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |

#### Returns

`Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of expression

#### Defined in

[IOrm.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L24)

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[IOrm.ts:25](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L25)

___

### sentence

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `Function` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Defined in

[IOrm.ts:46](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L46)

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Defined in

[IOrm.ts:47](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/de616fb/src/lib/IOrm.ts#L47)
