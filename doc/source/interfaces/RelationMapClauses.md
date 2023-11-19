[Lambda ORM client](../README.md) / RelationMapClauses

# RelationMapClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [filter](RelationMapClauses.md#filter)
- [include](RelationMapClauses.md#include)
- [sort](RelationMapClauses.md#sort)

## Methods

### filter

▸ **filter**(`predicate`, `thisArg?`): [`FilterClauses`](../classes/FilterClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`FilterClauses`](../classes/FilterClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:215](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/domain/queryable.ts#L215)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`IncludeClauses`](../classes/IncludeClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`IncludeClauses`](../classes/IncludeClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:217](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/domain/queryable.ts#L217)

___

### sort

▸ **sort**(`predicate`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `...args` | `any` |

#### Returns

`void`

#### Defined in

[domain/queryable.ts:213](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/domain/queryable.ts#L213)
