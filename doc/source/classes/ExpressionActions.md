[Lambda ORM client](../README.md) / ExpressionActions

# ExpressionActions

## Table of contents

### Constructors

- [constructor](ExpressionActions.md#constructor)

### Methods

- [constraints](ExpressionActions.md#constraints)
- [execute](ExpressionActions.md#execute)
- [executeQueued](ExpressionActions.md#executequeued)
- [metadata](ExpressionActions.md#metadata)
- [model](ExpressionActions.md#model)
- [parameters](ExpressionActions.md#parameters)
- [sentence](ExpressionActions.md#sentence)

## Constructors

### constructor

• **new ExpressionActions**(`name`, `orm`, `stage?`): [`ExpressionActions`](ExpressionActions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `orm` | [`IOrmClient`](../interfaces/IOrmClient.md) |
| `stage?` | `string` |

#### Returns

[`ExpressionActions`](ExpressionActions.md)

#### Defined in

[domain/actions.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L8)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Defined in

[domain/actions.ts:22](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L22)

___

### execute

▸ **execute**(`expression`, `data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[domain/actions.ts:34](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L34)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data`, `chunk?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data` | `any` |
| `chunk?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[domain/actions.ts:38](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L38)

___

### metadata

▸ **metadata**(`expression`): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Defined in

[domain/actions.ts:26](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L26)

___

### model

▸ **model**(`expression`): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Defined in

[domain/actions.ts:14](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L14)

___

### parameters

▸ **parameters**(`expression`): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Defined in

[domain/actions.ts:18](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L18)

___

### sentence

▸ **sentence**(`expression`): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Defined in

[domain/actions.ts:30](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/domain/actions.ts#L30)
