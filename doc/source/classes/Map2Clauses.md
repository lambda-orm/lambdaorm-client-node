[Lambda ORM client](../README.md) / Map2Clauses

# Class: Map2Clauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`QueryAction`](QueryAction.md)

  ↳ **`Map2Clauses`**

## Table of contents

### Constructors

- [constructor](Map2Clauses.md#constructor)

### Methods

- [constraints](Map2Clauses.md#constraints)
- [execute](Map2Clauses.md#execute)
- [executeQueued](Map2Clauses.md#executequeued)
- [metadata](Map2Clauses.md#metadata)
- [model](Map2Clauses.md#model)
- [parameters](Map2Clauses.md#parameters)
- [sentence](Map2Clauses.md#sentence)
- [sort](Map2Clauses.md#sort)

## Constructors

### constructor

• **new Map2Clauses**<`T`\>(`actions`, `expression`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`ExpressionActions`](ExpressionActions.md) |
| `expression` | `string` |

#### Inherited from

[QueryAction](QueryAction.md).[constructor](QueryAction.md#constructor)

#### Defined in

[manager/query.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[constraints](QueryAction.md#constraints)

#### Defined in

[manager/query.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L24)

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

[manager/query.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L12)

___

### executeQueued

▸ **executeQueued**(`topic`, `data`, `chunk?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `data` | `any` |
| `chunk?` | `number` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[QueryAction](QueryAction.md).[executeQueued](QueryAction.md#executequeued)

#### Defined in

[manager/query.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L16)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[metadata](QueryAction.md#metadata)

#### Defined in

[manager/query.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[model](QueryAction.md#model)

#### Defined in

[manager/query.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L20)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[parameters](QueryAction.md#parameters)

#### Defined in

[manager/query.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[sentence](QueryAction.md#sentence)

#### Defined in

[manager/query.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L32)

___

### sort

▸ **sort**(`predicate`): [`PageClauses`](PageClauses.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`PageClauses`](PageClauses.md)

#### Defined in

[manager/query.ts:55](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L55)
