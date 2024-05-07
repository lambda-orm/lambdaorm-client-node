[Lambda ORM client](../README.md) / QueryActions

# Interface: QueryActions

## Implemented by

- [`QueryActionsImpl`](../classes/QueryActionsImpl.md)

## Table of contents

### Methods

- [constraints](QueryActions.md#constraints)
- [execute](QueryActions.md#execute)
- [metadata](QueryActions.md#metadata)
- [model](QueryActions.md#model)
- [normalize](QueryActions.md#normalize)
- [parameters](QueryActions.md#parameters)
- [plan](QueryActions.md#plan)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:8

___

### execute

▸ **execute**(`query`, `data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `data` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:4

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:9

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:6

___

### normalize

▸ **normalize**(`query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:5

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:7

___

### plan

▸ **plan**(`query`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

node_modules/lambdaorm-base/repository/domain/actions.d.ts:10
