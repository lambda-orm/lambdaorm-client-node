[Lambda ORM client](../README.md) / ExpressionActionsImpl

# Class: ExpressionActionsImpl

## Implements

- [`ExpressionActions`](../interfaces/ExpressionActions.md)

## Table of contents

### Constructors

- [constructor](ExpressionActionsImpl.md#constructor)

### Methods

- [constraints](ExpressionActionsImpl.md#constraints)
- [execute](ExpressionActionsImpl.md#execute)
- [executeQueued](ExpressionActionsImpl.md#executequeued)
- [metadata](ExpressionActionsImpl.md#metadata)
- [model](ExpressionActionsImpl.md#model)
- [normalize](ExpressionActionsImpl.md#normalize)
- [parameters](ExpressionActionsImpl.md#parameters)
- [plan](ExpressionActionsImpl.md#plan)

## Constructors

### constructor

• **new ExpressionActionsImpl**(`name`, `orm`, `stage?`): [`ExpressionActionsImpl`](ExpressionActionsImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `orm` | [`IOrm`](../interfaces/IOrm.md) |
| `stage?` | `string` |

#### Returns

[`ExpressionActionsImpl`](ExpressionActionsImpl.md)

#### Defined in

[src/lib/domain/actions.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L8)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataConstraint`](../interfaces/MetadataConstraint.md)\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[constraints](../interfaces/ExpressionActions.md#constraints)

#### Defined in

[src/lib/domain/actions.ts:28](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L28)

___

### execute

▸ **execute**(`expression`, `data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data` | `any` |

#### Returns

`Promise`\<`any`\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[execute](../interfaces/ExpressionActions.md#execute)

#### Defined in

[src/lib/domain/actions.ts:40](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L40)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data`, `chunk?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `topic` | `string` |
| `data` | `any` |
| `chunk?` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/lib/domain/actions.ts:44](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L44)

___

### metadata

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`Metadata`](../interfaces/Metadata.md)\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[metadata](../interfaces/ExpressionActions.md#metadata)

#### Defined in

[src/lib/domain/actions.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L32)

___

### model

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataModel`](../interfaces/MetadataModel.md)[]\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[model](../interfaces/ExpressionActions.md#model)

#### Defined in

[src/lib/domain/actions.ts:20](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L20)

___

### normalize

▸ **normalize**(`expression`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`string`

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[normalize](../interfaces/ExpressionActions.md#normalize)

#### Defined in

[src/lib/domain/actions.ts:15](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L15)

___

### parameters

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`MetadataParameter`](../interfaces/MetadataParameter.md)[]\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[parameters](../interfaces/ExpressionActions.md#parameters)

#### Defined in

[src/lib/domain/actions.ts:24](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L24)

___

### plan

▸ **plan**(`expression`): `Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Promise`\<[`QueryPlan`](../interfaces/QueryPlan.md)\>

#### Implementation of

[ExpressionActions](../interfaces/ExpressionActions.md).[plan](../interfaces/ExpressionActions.md#plan)

#### Defined in

[src/lib/domain/actions.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/622022e/src/lib/domain/actions.ts#L36)
