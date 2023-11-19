[Lambda ORM client](../README.md) / RelationIncludeClauses

# RelationIncludeClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [distinct](RelationIncludeClauses.md#distinct)
- [first](RelationIncludeClauses.md#first)
- [last](RelationIncludeClauses.md#last)
- [map](RelationIncludeClauses.md#map)

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

[domain/queryable.ts:227](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L227)

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

[domain/queryable.ts:223](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L223)

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

[domain/queryable.ts:225](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L225)

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

[domain/queryable.ts:221](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L221)
