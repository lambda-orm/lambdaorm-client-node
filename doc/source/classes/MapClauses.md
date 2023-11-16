[Lambda ORM client](../README.md) / MapClauses

# MapClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`PageClauses`](PageClauses.md)

  ↳ **`MapClauses`**

  ↳↳ [`HavingClauses`](HavingClauses.md)

  ↳↳ [`Queryable`](Queryable.md)

## Table of contents

### Constructors

- [constructor](MapClauses.md#constructor)

### Methods

- [constraints](MapClauses.md#constraints)
- [execute](MapClauses.md#execute)
- [executeQueued](MapClauses.md#executequeued)
- [metadata](MapClauses.md#metadata)
- [model](MapClauses.md#model)
- [page](MapClauses.md#page)
- [parameters](MapClauses.md#parameters)
- [sentence](MapClauses.md#sentence)
- [sort](MapClauses.md#sort)

## Constructors

### constructor

• **new MapClauses**<`T`\>(`actions`, `expression`): [`MapClauses`](MapClauses.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`ExpressionActions`](ExpressionActions.md) |
| `expression` | `string` |

#### Returns

[`MapClauses`](MapClauses.md)<`T`\>

#### Inherited from

[PageClauses](PageClauses.md).[constructor](PageClauses.md#constructor)

#### Defined in

[manager/query.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[constraints](PageClauses.md#constraints)

#### Defined in

[manager/query.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L24)

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

[PageClauses](PageClauses.md).[execute](PageClauses.md#execute)

#### Defined in

[manager/query.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L12)

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

[PageClauses](PageClauses.md).[executeQueued](PageClauses.md#executequeued)

#### Defined in

[manager/query.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L16)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[metadata](PageClauses.md#metadata)

#### Defined in

[manager/query.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[PageClauses](PageClauses.md).[model](PageClauses.md#model)

#### Defined in

[manager/query.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L20)

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

#### Inherited from

[PageClauses](PageClauses.md).[page](PageClauses.md#page)

#### Defined in

[manager/query.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[PageClauses](PageClauses.md).[parameters](PageClauses.md#parameters)

#### Defined in

[manager/query.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[sentence](PageClauses.md#sentence)

#### Defined in

[manager/query.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L32)

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

[manager/query.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/query.ts#L49)
