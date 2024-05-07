[Lambda ORM client](../README.md) / QueryActionsImpl

# Class: QueryActionsImpl

## Implements

- [`QueryActions`](../interfaces/QueryActions.md)

## Table of contents

### Constructors

- [constructor](QueryActionsImpl.md#constructor)

### Methods

- [constraints](QueryActionsImpl.md#constraints)
- [execute](QueryActionsImpl.md#execute)
- [executeQueued](QueryActionsImpl.md#executequeued)
- [metadata](QueryActionsImpl.md#metadata)
- [model](QueryActionsImpl.md#model)
- [normalize](QueryActionsImpl.md#normalize)
- [parameters](QueryActionsImpl.md#parameters)
- [plan](QueryActionsImpl.md#plan)

## Constructors

### constructor

• **new QueryActionsImpl**(`name`, `orm`, `stage?`): [`QueryActionsImpl`](QueryActionsImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `orm` | [`IOrm`](../interfaces/IOrm.md) |
| `stage?` | `string` |

#### Returns

[`QueryActionsImpl`](QueryActionsImpl.md)

#### Defined in

[src/lib/domain/actions.ts:8](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L8)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[constraints](../interfaces/QueryActions.md#constraints)

#### Defined in

[src/lib/domain/actions.ts:28](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L28)

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

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[execute](../interfaces/QueryActions.md#execute)

#### Defined in

[src/lib/domain/actions.ts:40](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L40)

___

### executeQueued

▸ **executeQueued**(`query`, `topic`, `data`, `chunk?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `topic` | `string` |
| `data` | `any` |
| `chunk?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/domain/actions.ts:44](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L44)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[metadata](../interfaces/QueryActions.md#metadata)

#### Defined in

[src/lib/domain/actions.ts:32](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L32)

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[model](../interfaces/QueryActions.md#model)

#### Defined in

[src/lib/domain/actions.ts:20](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L20)

___

### normalize

▸ **normalize**(`query`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`string`

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[normalize](../interfaces/QueryActions.md#normalize)

#### Defined in

[src/lib/domain/actions.ts:15](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L15)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[parameters](../interfaces/QueryActions.md#parameters)

#### Defined in

[src/lib/domain/actions.ts:24](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L24)

___

### plan

▸ **plan**(`query`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[QueryActions](../interfaces/QueryActions.md).[plan](../interfaces/QueryActions.md#plan)

#### Defined in

[src/lib/domain/actions.ts:36](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/domain/actions.ts#L36)
