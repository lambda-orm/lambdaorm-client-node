[Lambda ORM client](../README.md) / ExpressionService

# ExpressionService

## Table of contents

### Methods

- [constraints](ExpressionService.md#constraints)
- [execute](ExpressionService.md#execute)
- [executeQueued](ExpressionService.md#executequeued)
- [metadata](ExpressionService.md#metadata)
- [model](ExpressionService.md#model)
- [parameters](ExpressionService.md#parameters)
- [sentence](ExpressionService.md#sentence)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of expression

#### Defined in

[application/ExpressionService.ts:23](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L23)

___

### execute

▸ **execute**(`expression`, `data`, `options?`): `Promise`<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `data` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`<`any`\>

Result of execution

#### Defined in

[application/ExpressionService.ts:46](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L46)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data`, `chunk?`, `options?`): `Promise`<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `topic` | `string` | - |
| `data` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`<`any`\>

Result of execution

#### Defined in

[application/ExpressionService.ts:55](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L55)

___

### metadata

▸ **metadata**(`expression`): `Promise`<[`Metadata`](Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`<[`Metadata`](Metadata.md)\>

metadata of expression

#### Defined in

[application/ExpressionService.ts:30](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L30)

___

### model

▸ **model**(`expression`): `Promise`<[`MetadataModel`](MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`<[`MetadataModel`](MetadataModel.md)[]\>

Model of expression

#### Defined in

[application/ExpressionService.ts:9](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L9)

___

### parameters

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of expression

#### Defined in

[application/ExpressionService.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L16)

___

### sentence

▸ **sentence**(`expression`, `options`): `Promise`<[`MetadataSentence`](MetadataSentence.md)\>

Get getInfo of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `options` | `undefined` \| [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`<[`MetadataSentence`](MetadataSentence.md)\>

#### Defined in

[application/ExpressionService.ts:37](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/application/ExpressionService.ts#L37)
