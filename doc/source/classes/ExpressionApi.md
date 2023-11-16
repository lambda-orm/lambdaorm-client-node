[Lambda ORM client](../README.md) / ExpressionApi

# Class: ExpressionApi

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

• **new ExpressionApi**(`configuration`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[client/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/base.ts#L50)

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

[client/api.ts:1355](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1355)

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

[client/api.ts:1366](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1366)

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

[client/api.ts:1377](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1377)

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

[client/api.ts:1388](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1388)

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

[client/api.ts:1399](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1399)

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

[client/api.ts:1410](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1410)

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

[client/api.ts:1421](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1421)
