[Lambda ORM client](../README.md) / FilterClauses

# Class: FilterClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`HavingClauses`](HavingClauses.md)<`T`\>

  ↳ **`FilterClauses`**

## Table of contents

### Constructors

- [constructor](FilterClauses.md#constructor)

### Methods

- [constraints](FilterClauses.md#constraints)
- [distinct](FilterClauses.md#distinct)
- [execute](FilterClauses.md#execute)
- [executeQueued](FilterClauses.md#executequeued)
- [first](FilterClauses.md#first)
- [having](FilterClauses.md#having)
- [include](FilterClauses.md#include)
- [last](FilterClauses.md#last)
- [map](FilterClauses.md#map)
- [metadata](FilterClauses.md#metadata)
- [model](FilterClauses.md#model)
- [page](FilterClauses.md#page)
- [parameters](FilterClauses.md#parameters)
- [sentence](FilterClauses.md#sentence)
- [sort](FilterClauses.md#sort)
- [take](FilterClauses.md#take)

## Constructors

### constructor

• **new FilterClauses**<`T`\>(`actions`, `expression`)

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

[HavingClauses](HavingClauses.md).[constructor](HavingClauses.md#constructor)

#### Defined in

[manager/query.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[constraints](HavingClauses.md#constraints)

#### Defined in

[manager/query.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L24)

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

#### Inherited from

[HavingClauses](HavingClauses.md).[distinct](HavingClauses.md#distinct)

#### Defined in

[manager/query.ts:82](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L82)

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

[HavingClauses](HavingClauses.md).[execute](HavingClauses.md#execute)

#### Defined in

[manager/query.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L12)

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

[HavingClauses](HavingClauses.md).[executeQueued](HavingClauses.md#executequeued)

#### Defined in

[manager/query.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L16)

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

#### Inherited from

[HavingClauses](HavingClauses.md).[first](HavingClauses.md#first)

#### Defined in

[manager/query.ts:67](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L67)

___

### having

▸ **having**(`predicate`): [`HavingClauses`](HavingClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`HavingClauses`](HavingClauses.md)<`T`\>

#### Defined in

[manager/query.ts:110](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L110)

___

### include

▸ **include**(`predicate`): [`IncludeClauses`](IncludeClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`IncludeClauses`](IncludeClauses.md)<`T`\>

#### Defined in

[manager/query.ts:105](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L105)

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

#### Inherited from

[HavingClauses](HavingClauses.md).[last](HavingClauses.md#last)

#### Defined in

[manager/query.ts:72](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L72)

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

#### Inherited from

[HavingClauses](HavingClauses.md).[map](HavingClauses.md#map)

#### Defined in

[manager/query.ts:62](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L62)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[metadata](HavingClauses.md#metadata)

#### Defined in

[manager/query.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[HavingClauses](HavingClauses.md).[model](HavingClauses.md#model)

#### Defined in

[manager/query.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L20)

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

[HavingClauses](HavingClauses.md).[page](HavingClauses.md#page)

#### Defined in

[manager/query.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[HavingClauses](HavingClauses.md).[parameters](HavingClauses.md#parameters)

#### Defined in

[manager/query.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[sentence](HavingClauses.md#sentence)

#### Defined in

[manager/query.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L32)

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

[HavingClauses](HavingClauses.md).[sort](HavingClauses.md#sort)

#### Defined in

[manager/query.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L49)

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

#### Inherited from

[HavingClauses](HavingClauses.md).[take](HavingClauses.md#take)

#### Defined in

[manager/query.ts:77](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/manager/query.ts#L77)
