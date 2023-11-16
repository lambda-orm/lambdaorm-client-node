[Lambda ORM client](../README.md) / Queryable

# Class: Queryable<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`MapClauses`](MapClauses.md)<`T`\>

  ↳ **`Queryable`**

## Table of contents

### Constructors

- [constructor](Queryable.md#constructor)

### Methods

- [constraints](Queryable.md#constraints)
- [distinct](Queryable.md#distinct)
- [execute](Queryable.md#execute)
- [executeQueued](Queryable.md#executequeued)
- [filter](Queryable.md#filter)
- [first](Queryable.md#first)
- [having](Queryable.md#having)
- [include](Queryable.md#include)
- [last](Queryable.md#last)
- [map](Queryable.md#map)
- [metadata](Queryable.md#metadata)
- [model](Queryable.md#model)
- [page](Queryable.md#page)
- [parameters](Queryable.md#parameters)
- [sentence](Queryable.md#sentence)
- [sort](Queryable.md#sort)
- [take](Queryable.md#take)

## Constructors

### constructor

• **new Queryable**<`T`\>(`actions`, `expression`)

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

[MapClauses](MapClauses.md).[constructor](MapClauses.md#constructor)

#### Defined in

[manager/query.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[constraints](MapClauses.md#constraints)

#### Defined in

[manager/query.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L24)

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

[manager/query.ts:146](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L146)

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

[MapClauses](MapClauses.md).[executeQueued](MapClauses.md#executequeued)

#### Defined in

[manager/query.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L16)

___

### filter

▸ **filter**(`predicate`): [`FilterClauses`](FilterClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`FilterClauses`](FilterClauses.md)<`T`\>

#### Defined in

[manager/query.ts:116](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L116)

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

[manager/query.ts:131](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L131)

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

[manager/query.ts:151](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L151)

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

[manager/query.ts:121](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L121)

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

[manager/query.ts:136](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L136)

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

[manager/query.ts:126](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L126)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[metadata](MapClauses.md#metadata)

#### Defined in

[manager/query.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[MapClauses](MapClauses.md).[model](MapClauses.md#model)

#### Defined in

[manager/query.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L20)

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

[manager/query.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[MapClauses](MapClauses.md).[parameters](MapClauses.md#parameters)

#### Defined in

[manager/query.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[MapClauses](MapClauses.md).[sentence](MapClauses.md#sentence)

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

#### Inherited from

[MapClauses](MapClauses.md).[sort](MapClauses.md#sort)

#### Defined in

[manager/query.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L49)

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

[manager/query.ts:141](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/manager/query.ts#L141)
