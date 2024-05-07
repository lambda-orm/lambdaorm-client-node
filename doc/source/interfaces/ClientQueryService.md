[Lambda ORM client](../README.md) / ClientQueryService

# Interface: ClientQueryService

## Table of contents

### Methods

- [constraints](ClientQueryService.md#constraints)
- [execute](ClientQueryService.md#execute)
- [executeQueued](ClientQueryService.md#executequeued)
- [metadata](ClientQueryService.md#metadata)
- [model](ClientQueryService.md#model)
- [parameters](ClientQueryService.md#parameters)
- [plan](ClientQueryService.md#plan)

## Methods

### constraints

▸ **constraints**(`query`): `Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Get constraints of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`MetadataConstraint`](MetadataConstraint.md)\>

Constraints of query

#### Defined in

[src/lib/application/services/QueryService.ts:23](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L23)

___

### execute

▸ **execute**(`query`, `data`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |
| `data` | `any` | Data with variables |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/services/QueryService.ts:46](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L46)

___

### executeQueued

▸ **executeQueued**(`query`, `topic`, `data`, `chunk?`, `options?`): `Promise`\<`any`\>

Execute query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |
| `topic` | `string` | - |
| `data` | `any` | Data with variables |
| `chunk?` | `number` | - |
| `options?` | [`QueryOptions`](QueryOptions.md) | options of execution |

#### Returns

`Promise`\<`any`\>

Result of execution

#### Defined in

[src/lib/application/services/QueryService.ts:55](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L55)

___

### metadata

▸ **metadata**(`query`): `Promise`\<[`Metadata`](Metadata.md)\>

Get metadata of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`Metadata`](Metadata.md)\>

metadata of query

#### Defined in

[src/lib/application/services/QueryService.ts:30](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L30)

___

### model

▸ **model**(`query`): `Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Get model of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query |

#### Returns

`Promise`\<[`MetadataModel`](MetadataModel.md)[]\>

Model of query

#### Defined in

[src/lib/application/services/QueryService.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L9)

___

### parameters

▸ **parameters**(`query`): `Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Get parameters of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |

#### Returns

`Promise`\<[`MetadataParameter`](MetadataParameter.md)[]\>

Parameters of query

#### Defined in

[src/lib/application/services/QueryService.ts:16](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L16)

___

### plan

▸ **plan**(`query`, `options`): `Promise`\<[`QueryPlan`](QueryPlan.md)\>

Get plan of query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `Function` | query expression |
| `options` | `undefined` \| [`QueryOptions`](QueryOptions.md) | options of query |

#### Returns

`Promise`\<[`QueryPlan`](QueryPlan.md)\>

#### Defined in

[src/lib/application/services/QueryService.ts:37](https://github.com/lambda-orm/lambdaorm-client-node/blob/39a7f9ff3f0038de117e7a22f79e40688374af53/src/lib/application/services/QueryService.ts#L37)
