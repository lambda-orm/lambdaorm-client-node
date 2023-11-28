[Lambda ORM client](../README.md) / IncludeAction

# Class: IncludeAction\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`QueryAction`](QueryAction.md)

  ↳ **`IncludeAction`**

## Table of contents

### Constructors

- [constructor](IncludeAction.md#constructor)

### Methods

- [constraints](IncludeAction.md#constraints)
- [execute](IncludeAction.md#execute)
- [include](IncludeAction.md#include)
- [metadata](IncludeAction.md#metadata)
- [model](IncludeAction.md#model)
- [normalize](IncludeAction.md#normalize)
- [parameters](IncludeAction.md#parameters)
- [plan](IncludeAction.md#plan)

## Constructors

### constructor

• **new IncludeAction**\<`T`\>(`actions`, `expression`): [`IncludeAction`](IncludeAction.md)\<`T`\>

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

[`IncludeAction`](IncludeAction.md)\<`T`\>

#### Inherited from

[QueryAction](QueryAction.md).[constructor](QueryAction.md#constructor)

#### Defined in

[domain/queryable.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[constraints](QueryAction.md#constraints)

#### Defined in

[domain/queryable.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L24)

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

[QueryAction](QueryAction.md).[execute](QueryAction.md#execute)

#### Defined in

[domain/queryable.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L12)

___

### include

▸ **include**(`predicate`): [`QueryAction`](QueryAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`QueryAction`](QueryAction.md)

#### Defined in

[domain/queryable.ts:116](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L116)

___

### metadata

▸ **metadata**(): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[metadata](QueryAction.md#metadata)

#### Defined in

[domain/queryable.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L36)

___

### model

▸ **model**(): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[model](QueryAction.md#model)

#### Defined in

[domain/queryable.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L20)

___

### normalize

▸ **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[QueryAction](QueryAction.md).[normalize](QueryAction.md#normalize)

#### Defined in

[domain/queryable.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L16)

___

### parameters

▸ **parameters**(): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[QueryAction](QueryAction.md).[parameters](QueryAction.md#parameters)

#### Defined in

[domain/queryable.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L28)

___

### plan

▸ **plan**(): `Promise`\<[`MetadataPlan`](../interfaces/MetadataPlan.md)\>

#### Returns

`Promise`\<[`MetadataPlan`](../interfaces/MetadataPlan.md)\>

#### Inherited from

[QueryAction](QueryAction.md).[plan](QueryAction.md#plan)

#### Defined in

[domain/queryable.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/70ce19d/src/lib/domain/queryable.ts#L32)
