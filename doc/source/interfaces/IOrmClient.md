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

[application/ports/IOrm.ts:6](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L6)

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

[application/ports/IOrm.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L28)

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

[application/ports/IOrm.ts:29](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L29)

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[application/ports/IOrm.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L8)

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

[application/ports/IOrm.ts:53](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L53)

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

[application/ports/IOrm.ts:54](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L54)

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

[application/ports/IOrm.ts:63](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L63)

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

[application/ports/IOrm.ts:64](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L64)

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

[application/ports/IOrm.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L7)

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

[application/ports/IOrm.ts:35](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L35)

▸ **metadata**(`expression`): `Promise`<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`Metadata`](Metadata.md)\>

#### Defined in

[application/ports/IOrm.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L36)

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

[application/ports/IOrm.ts:14](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L14)

▸ **model**(`expression`): `Promise`<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

[application/ports/IOrm.ts:15](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L15)

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

[application/ports/IOrm.ts:21](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L21)

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

[application/ports/IOrm.ts:22](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L22)

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

[application/ports/IOrm.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L43)

▸ **sentence**(`expression`, `options?`): `Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `options?` | [`QueryOptions`](QueryOptions.md) |

#### Returns

`Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Defined in

[application/ports/IOrm.ts:44](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/ports/IOrm.ts#L44)
