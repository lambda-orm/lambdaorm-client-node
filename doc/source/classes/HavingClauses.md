[Lambda ORM client](../README.md) / HavingClauses

# HavingClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`MapClauses`](MapClauses.md)<`T`\>

  ↳ **`HavingClauses`**

  ↳↳ [`FilterIncludeClauses`](FilterIncludeClauses.md)

  ↳↳ [`IncludeClauses`](IncludeClauses.md)

  ↳↳ [`FilterClauses`](FilterClauses.md)

## Table of contents

### Constructors

- [constructor](HavingClauses.md#constructor)

### Methods

- [constraints](HavingClauses.md#constraints)
- [distinct](HavingClauses.md#distinct)
- [execute](HavingClauses.md#execute)
- [executeQueued](HavingClauses.md#executequeued)
- [first](HavingClauses.md#first)
- [last](HavingClauses.md#last)
- [map](HavingClauses.md#map)
- [metadata](HavingClauses.md#metadata)
- [model](HavingClauses.md#model)
- [page](HavingClauses.md#page)
- [parameters](HavingClauses.md#parameters)
- [sentence](HavingClauses.md#sentence)
- [sort](HavingClauses.md#sort)
- [take](HavingClauses.md#take)

## Constructors

### constructor

• **new HavingClauses**<`T`\>(`actions`, `expression`): [`HavingClauses`](HavingClauses.md)<`T`\>

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

[`HavingClauses`](HavingClauses.md)<`T`\>

#### Inherited from

[MapClauses](MapClauses.md).[constructor](MapClauses.md#constructor)

#### Defined in

[manager/query.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[constraints](MapClauses.md#constraints)

#### Defined in

[manager/query.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L24)

___

### distinct

▸ **distinct**<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`MapClauses`](MapClauses.md)<`U`\>

#### Defined in

[manager/query.ts:82](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L82)

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

[MapClauses](MapClauses.md).[execute](MapClauses.md#execute)

#### Defined in

[manager/query.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L12)

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

[MapClauses](MapClauses.md).[executeQueued](MapClauses.md#executequeued)

#### Defined in

[manager/query.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L16)

___

### first

▸ **first**<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Defined in

[manager/query.ts:67](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L67)

___

### last

▸ **last**<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Defined in

[manager/query.ts:72](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L72)

___

### map

▸ **map**<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`MapClauses`](MapClauses.md)<`U`\>

#### Defined in

[manager/query.ts:62](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L62)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[metadata](MapClauses.md#metadata)

#### Defined in

[manager/query.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[MapClauses](MapClauses.md).[model](MapClauses.md#model)

#### Defined in

[manager/query.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L20)

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

[MapClauses](MapClauses.md).[page](MapClauses.md#page)

#### Defined in

[manager/query.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[MapClauses](MapClauses.md).[parameters](MapClauses.md#parameters)

#### Defined in

[manager/query.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[sentence](MapClauses.md#sentence)

#### Defined in

[manager/query.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L32)

___

### sort

▸ **sort**(`predicate`): [`PageClauses`](PageClauses.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`PageClauses`](PageClauses.md)

#### Inherited from

[MapClauses](MapClauses.md).[sort](MapClauses.md#sort)

#### Defined in

[manager/query.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L49)

___

### take

▸ **take**<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`Map2Clauses`](Map2Clauses.md)<`U`\>

#### Defined in

[manager/query.ts:77](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/7c52331/src/lib/manager/query.ts#L77)
