[Lambda ORM client](../README.md) / ModifyClauses

# ModifyClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [filter](ModifyClauses.md#filter)
- [include](ModifyClauses.md#include)

## Methods

### filter

▸ **filter**(`predicate`, `thisArg?`): [`ModifyFilterClauses`](ModifyFilterClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`ModifyFilterClauses`](ModifyFilterClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:201](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L201)

___

### include

▸ **include**(`predicate`, `thisArg?`): [`ModifyIncludeClauses`](ModifyIncludeClauses.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`ModifyIncludeClauses`](ModifyIncludeClauses.md)<`T`\>

#### Defined in

[domain/queryable.ts:203](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L203)
