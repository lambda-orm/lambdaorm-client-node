[Lambda ORM client](../README.md) / Queryable

# Class: Queryable\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`HavingClauses`](HavingClauses.md)\<`T`\>

  ↳ **`Queryable`**

## Table of contents

### Constructors

- [constructor](Queryable.md#constructor)

### Methods

- [bulkInsert](Queryable.md#bulkinsert)
- [constraints](Queryable.md#constraints)
- [delete](Queryable.md#delete)
- [deleteAll](Queryable.md#deleteall)
- [distinct](Queryable.md#distinct)
- [execute](Queryable.md#execute)
- [filter](Queryable.md#filter)
- [first](Queryable.md#first)
- [having](Queryable.md#having)
- [include](Queryable.md#include)
- [insert](Queryable.md#insert)
- [last](Queryable.md#last)
- [map](Queryable.md#map)
- [metadata](Queryable.md#metadata)
- [model](Queryable.md#model)
- [normalize](Queryable.md#normalize)
- [page](Queryable.md#page)
- [parameters](Queryable.md#parameters)
- [plan](Queryable.md#plan)
- [sort](Queryable.md#sort)
- [update](Queryable.md#update)
- [updateAll](Queryable.md#updateall)

## Constructors

### constructor

• **new Queryable**\<`T`\>(`actions`, `expression`): [`Queryable`](Queryable.md)\<`T`\>

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

[`Queryable`](Queryable.md)\<`T`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[constructor](HavingClauses.md#constructor)

#### Defined in

[domain/queryable.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L7)

## Methods

### bulkInsert

▸ **bulkInsert**(`value?`): [`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

#### Returns

[`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:158](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L158)

___

### constraints

▸ **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[constraints](HavingClauses.md#constraints)

#### Defined in

[domain/queryable.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L24)

___

### delete

▸ **delete**(`predicate?`): [`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

[`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:177](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L177)

___

### deleteAll

▸ **deleteAll**(): [`IncludeAction`](IncludeAction.md)\<`T`\>

#### Returns

[`IncludeAction`](IncludeAction.md)\<`T`\>

#### Defined in

[domain/queryable.ts:186](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L186)

___

### distinct

▸ **distinct**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[distinct](HavingClauses.md#distinct)

#### Defined in

[domain/queryable.ts:76](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L76)

___

### execute

▸ **execute**(`data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[execute](HavingClauses.md#execute)

#### Defined in

[domain/queryable.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L12)

___

### filter

▸ **filter**(`predicate`): [`FilterClauses`](FilterClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`FilterClauses`](FilterClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:133](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L133)

___

### first

▸ **first**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[first](HavingClauses.md#first)

#### Defined in

[domain/queryable.ts:66](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L66)

___

### having

▸ **having**(`predicate`): [`HavingClauses`](HavingClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`HavingClauses`](HavingClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:143](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L143)

___

### include

▸ **include**(`predicate`): [`IncludeClauses`](IncludeClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`IncludeClauses`](IncludeClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:138](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L138)

___

### insert

▸ **insert**(`predicate?`): [`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

[`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:149](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L149)

___

### last

▸ **last**\<`U`\>(`predicate`): [`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`Map2Clauses`](Map2Clauses.md)\<`U`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[last](HavingClauses.md#last)

#### Defined in

[domain/queryable.ts:71](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L71)

___

### map

▸ **map**\<`U`\>(`predicate`): [`MapClauses`](MapClauses.md)\<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |

#### Returns

[`MapClauses`](MapClauses.md)\<`U`\>

#### Inherited from

[HavingClauses](HavingClauses.md).[map](HavingClauses.md#map)

#### Defined in

[domain/queryable.ts:61](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L61)

___

### metadata

▸ **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[metadata](HavingClauses.md#metadata)

#### Defined in

[domain/queryable.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L36)

___

### model

▸ **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[HavingClauses](HavingClauses.md).[model](HavingClauses.md#model)

#### Defined in

[domain/queryable.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L20)

___

### normalize

▸ **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[HavingClauses](HavingClauses.md).[normalize](HavingClauses.md#normalize)

#### Defined in

[domain/queryable.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L16)

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

[domain/queryable.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[HavingClauses](HavingClauses.md).[parameters](HavingClauses.md#parameters)

#### Defined in

[domain/queryable.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L28)

___

### plan

▸ **plan**(): `Promise`\<[`MetadataPlan`](../interfaces/MetadataPlan.md)\>

#### Returns

`Promise`\<[`MetadataPlan`](../interfaces/MetadataPlan.md)\>

#### Inherited from

[HavingClauses](HavingClauses.md).[plan](HavingClauses.md#plan)

#### Defined in

[domain/queryable.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L32)

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

[domain/queryable.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L49)

___

### update

▸ **update**(`predicate?`): [`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`ModificableClauses`](ModificableClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:163](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L163)

___

### updateAll

▸ **updateAll**(`predicate`): [`IncludeAction`](IncludeAction.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`IncludeAction`](IncludeAction.md)\<`T`\>

#### Defined in

[domain/queryable.ts:172](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/216c8a0/src/lib/domain/queryable.ts#L172)
