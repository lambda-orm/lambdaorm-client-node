[Lambda ORM client](../README.md) / IRelation

# IRelation<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [distinct](IRelation.md#distinct)
- [filter](IRelation.md#filter)
- [first](IRelation.md#first)
- [include](IRelation.md#include)
- [insert](IRelation.md#insert)
- [last](IRelation.md#last)
- [map](IRelation.md#map)
- [update](IRelation.md#update)

## Methods

### distinct

▸ **distinct**<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:237](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L237)

___

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

[domain/queryable.ts:247](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L247)

___

### first

▸ **first**<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:233](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L233)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`RelationIncludeClauses`](RelationIncludeClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`RelationIncludeClauses`](RelationIncludeClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:239](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L239)

___

### insert

▸ **insert**(`predicate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

`void`

#### Defined in

[domain/queryable.ts:244](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L244)

___

### last

▸ **last**<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:235](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L235)

___

### map

▸ **map**<`U`\>(`predicate`, `thisArg?`): [`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` |
| `thisArg?` | `any` |

#### Returns

[`RelationMapClauses`](RelationMapClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:231](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L231)

___

### update

▸ **update**(`predicate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`value`: `T`) => `unknown` |

#### Returns

`void`

#### Defined in

[domain/queryable.ts:241](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L241)
