[Lambda ORM client](../README.md) / ClientExpressionService

# Interface: ClientExpressionService

## Table of contents

### Methods

- [constraints](ClientExpressionService.md#constraints)
- [execute](ClientExpressionService.md#execute)
- [executeQueued](ClientExpressionService.md#executequeued)
- [metadata](ClientExpressionService.md#metadata)
- [model](ClientExpressionService.md#model)
- [parameters](ClientExpressionService.md#parameters)
- [plan](ClientExpressionService.md#plan)

## Methods

### constraints

▸ **constraints**(`expression`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of expression

#### Defined in

[src/lib/application/services/ExpressionService.ts:23](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L23)

___

### execute

▸ **execute**(`expression`, `data`, `options?`): `Promise`\<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `data` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/services/ExpressionService.ts:46](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L46)

___

### executeQueued

▸ **executeQueued**(`expression`, `topic`, `data`, `chunk?`, `options?`): `Promise`\<`any`\>

Execute expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `topic` | `string` | - |
| `data` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/services/ExpressionService.ts:55](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L55)

___

### metadata

▸ **metadata**(`expression`): `Promise`\<[`Metadata`](Metadata.md)\>

Get metadata of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

metadata of expression

#### Defined in

[src/lib/application/services/ExpressionService.ts:30](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L30)

___

### model

▸ **model**(`expression`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Get model of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Model of expression

#### Defined in

[src/lib/application/services/ExpressionService.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L9)

___

### parameters

▸ **parameters**(`expression`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of expression

#### Defined in

[src/lib/application/services/ExpressionService.ts:16](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L16)

___

### plan

▸ **plan**(`expression`, `options`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

Get plan of expression

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expression` | `string` \| `Function` | query expression |
| `options` | `undefined` \| [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/services/ExpressionService.ts:37](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/ExpressionService.ts#L37)