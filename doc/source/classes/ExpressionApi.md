[Lambda ORM client](../README.md) / ExpressionApi

# ExpressionApi

ExpressionApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ExpressionApi`**

## Table of contents

### Constructors

- [constructor](ExpressionApi.md#constructor)

### Methods

- [constraints](ExpressionApi.md#constraints)
- [execute](ExpressionApi.md#execute)
- [executeQueued](ExpressionApi.md#executequeued)
- [metadata](ExpressionApi.md#metadata)
- [model](ExpressionApi.md#model)
- [parameters](ExpressionApi.md#parameters)
- [sentence](ExpressionApi.md#sentence)

## Constructors

### constructor

• **new ExpressionApi**(`configuration`, `axios?`): [`ExpressionApi`](ExpressionApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ExpressionApi`](ExpressionApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[application/services/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/base.ts#L50)

## Methods

### constraints

▸ **constraints**(`queryRequest?`, `options?`): `Promise`<`AxiosResponse`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md), `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest?` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataConstraint`](../interfaces/MetadataConstraint.md), `any`\>\>

#### Defined in

[application/services/expressionService.ts:363](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L363)

___

### execute

▸ **execute**(`queryRequest`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[application/services/expressionService.ts:374](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L374)

___

### executeQueued

▸ **executeQueued**(`queryQueuedRequest`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryQueuedRequest` | [`QueryQueuedRequest`](../interfaces/QueryQueuedRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[application/services/expressionService.ts:385](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L385)

___

### metadata

▸ **metadata**(`queryRequest?`, `options?`): `Promise`<`AxiosResponse`<[`Metadata`](../interfaces/Metadata.md), `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest?` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Metadata`](../interfaces/Metadata.md), `any`\>\>

#### Defined in

[application/services/expressionService.ts:396](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L396)

___

### model

▸ **model**(`queryRequest?`, `options?`): `Promise`<`AxiosResponse`<[`MetadataModel`](../interfaces/MetadataModel.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest?` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataModel`](../interfaces/MetadataModel.md)[], `any`\>\>

#### Defined in

[application/services/expressionService.ts:407](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L407)

___

### parameters

▸ **parameters**(`queryRequest?`, `options?`): `Promise`<`AxiosResponse`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest?` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataParameter`](../interfaces/MetadataParameter.md)[], `any`\>\>

#### Defined in

[application/services/expressionService.ts:418](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L418)

___

### sentence

▸ **sentence**(`queryRequest`, `options?`): `Promise`<`AxiosResponse`<[`MetadataSentence`](../interfaces/MetadataSentence.md), `any`\>\>

**`Throws`**

**`Memberof`**

ExpressionApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryRequest` | [`QueryRequest`](../interfaces/QueryRequest.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataSentence`](../interfaces/MetadataSentence.md), `any`\>\>

#### Defined in

[application/services/expressionService.ts:429](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/1ad40ad/src/lib/application/services/expressionService.ts#L429)
