[Lambda ORM client](../README.md) / PageClauses

# PageClauses

## Hierarchy

- [`QueryAction`](QueryAction.md)

  ↳ **`PageClauses`**

  ↳↳ [`MapClauses`](MapClauses.md)

## Table of contents

### Constructors

- [constructor](PageClauses.md#constructor)

### Methods

- [constraints](PageClauses.md#constraints)
- [execute](PageClauses.md#execute)
- [metadata](PageClauses.md#metadata)
- [model](PageClauses.md#model)
- [normalize](PageClauses.md#normalize)
- [page](PageClauses.md#page)
- [parameters](PageClauses.md#parameters)
- [sentence](PageClauses.md#sentence)

## Constructors

### constructor

• **new PageClauses**(`actions`, `expression`): [`PageClauses`](PageClauses.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`ExpressionActions`](ExpressionActions.md) |
| `expression` | `string` |

#### Returns

[`PageClauses`](PageClauses.md)

#### Inherited from

[QueryAction](QueryAction.md).[constructor](QueryAction.md#constructor)

#### Defined in

[domain/queryable.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[constraints](QueryAction.md#constraints)

#### Defined in

[domain/queryable.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L24)

___

### execute

▸ **execute**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[QueryAction](QueryAction.md).[execute](QueryAction.md#execute)

#### Defined in

[domain/queryable.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L12)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[metadata](QueryAction.md#metadata)

#### Defined in

[domain/queryable.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[model](QueryAction.md#model)

#### Defined in

[domain/queryable.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L20)

___

### normalize

▸ **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[QueryAction](QueryAction.md).[normalize](QueryAction.md#normalize)

#### Defined in

[domain/queryable.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L16)

___

### page

▸ **page**(`page`, `records`): [`QueryAction`](QueryAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `number` |
| `records` | `number` |

#### Returns

[`QueryAction`](QueryAction.md)

#### Defined in

[domain/queryable.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[parameters](QueryAction.md#parameters)

#### Defined in

[domain/queryable.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[sentence](QueryAction.md#sentence)

#### Defined in

[domain/queryable.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L32)
