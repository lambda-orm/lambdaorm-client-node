[Lambda ORM client](../README.md) / MapClauses

# MapClauses<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`PageClauses`](PageClauses.md)

  ↳ **`MapClauses`**

  ↳↳ [`HavingClauses`](HavingClauses.md)

## Table of contents

### Constructors

- [constructor](MapClauses.md#constructor)

### Methods

- [constraints](MapClauses.md#constraints)
- [execute](MapClauses.md#execute)
- [metadata](MapClauses.md#metadata)
- [model](MapClauses.md#model)
- [normalize](MapClauses.md#normalize)
- [page](MapClauses.md#page)
- [parameters](MapClauses.md#parameters)
- [sentence](MapClauses.md#sentence)
- [sort](MapClauses.md#sort)

## Constructors

### constructor

• **new MapClauses**<`T`\>(`actions`, `expression`): [`MapClauses`](MapClauses.md)<`T`\>

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

[`MapClauses`](MapClauses.md)<`T`\>

#### Inherited from

[PageClauses](PageClauses.md).[constructor](PageClauses.md#constructor)

#### Defined in

[domain/queryable.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L7)

## Methods

### constraints

▸ **constraints**(): `Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Returns

`Promise`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[constraints](PageClauses.md#constraints)

#### Defined in

[domain/queryable.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L24)

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

[PageClauses](PageClauses.md).[execute](PageClauses.md#execute)

#### Defined in

[domain/queryable.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L12)

___

### metadata

▸ **metadata**(): `Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/Metadata.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[metadata](PageClauses.md#metadata)

#### Defined in

[domain/queryable.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L36)

___

### model

▸ **model**(): `Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Returns

`Promise`<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Inherited from

[PageClauses](PageClauses.md).[model](PageClauses.md#model)

#### Defined in

[domain/queryable.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L20)

___

### normalize

▸ **normalize**(): `string`

#### Returns

`string`

#### Inherited from

[PageClauses](PageClauses.md).[normalize](PageClauses.md#normalize)

#### Defined in

[domain/queryable.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L16)

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

[PageClauses](PageClauses.md).[page](PageClauses.md#page)

#### Defined in

[domain/queryable.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L43)

___

### parameters

▸ **parameters**(): `Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Returns

`Promise`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Inherited from

[PageClauses](PageClauses.md).[parameters](PageClauses.md#parameters)

#### Defined in

[domain/queryable.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L28)

___

### sentence

▸ **sentence**(): `Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Returns

`Promise`<[`MetadataSentence`](../interfaces/MetadataSentence.md)\>

#### Inherited from

[PageClauses](PageClauses.md).[sentence](PageClauses.md#sentence)

#### Defined in

[domain/queryable.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L32)

___

### sort

▸ **sort**(`predicate`): [`PageClauses`](PageClauses.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` |

#### Returns

[`PageClauses`](PageClauses.md)

#### Defined in

[domain/queryable.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/domain/queryable.ts#L49)
