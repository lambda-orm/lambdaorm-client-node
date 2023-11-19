[Lambda ORM client](../README.md) / QueryAction

# QueryAction

## Hierarchy

- **`QueryAction`**

  ↳ [`PageClauses`](PageClauses.md)

  ↳ [`Map2Clauses`](Map2Clauses.md)

  ↳ [`FilterAction`](FilterAction.md)

  ↳ [`IncludeAction`](IncludeAction.md)

  ↳ [`ModificableClauses`](ModificableClauses.md)

## Table of contents

### Constructors

- [constructor](QueryAction.md#constructor)

### Methods

- [constraints](QueryAction.md#constraints)
- [execute](QueryAction.md#execute)
- [metadata](QueryAction.md#metadata)
- [model](QueryAction.md#model)
- [normalize](QueryAction.md#normalize)
- [parameters](QueryAction.md#parameters)
- [sentence](QueryAction.md#sentence)

## Constructors

### constructor

• **new QueryAction**(`actions`, `expression`): [`QueryAction`](QueryAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`ExpressionActions`](ExpressionActions.md) |
| `expression` | `string` |

#### Returns

[`QueryAction`](QueryAction.md)

#### Defined in

[domain/queryable.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Defined in

[domain/queryable.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L24)

___

### execute

▸ **execute**(`data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[domain/queryable.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L12)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Defined in

[domain/queryable.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Defined in

[domain/queryable.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L20)

___

### normalize

▸ **normalize**(): `string`

#### Returns

`string`

#### Defined in

[domain/queryable.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L16)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Defined in

[domain/queryable.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Defined in

[domain/queryable.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/domain/queryable.ts#L32)
