[Lambda ORM client](../README.md) / ModifyAllClauses

# Interface: ModifyAllClauses\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [include](ModifyAllClauses.md#include)

## Methods

### include

▸ **include**(`predicate`, `thisArg?`): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)\<`T`\>

#### Defined in

[domain/queryable.ts:208](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/5a7bd8d/src/lib/domain/queryable.ts#L208)
