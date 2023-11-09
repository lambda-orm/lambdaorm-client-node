[Lambda ORM client](../README.md) / StageApi

# Class: StageApi

StageApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`StageApi`**

## Table of contents

### Constructors

- [constructor](StageApi.md#constructor)

### Methods

- [\_export](StageApi.md#_export)
- [\_import](StageApi.md#_import)
- [exists](StageApi.md#exists)

## Constructors

### constructor

• **new StageApi**(`configuration`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[client/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b17abbe/src/lib/client/base.ts#L50)

## Methods

### \_export

▸ **_export**(`stage`, `options?`): `Promise`<`AxiosResponse`<[`SchemaData`](../interfaces/SchemaData.md), `any`\>\>

**`Throws`**

**`Memberof`**

StageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stage` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SchemaData`](../interfaces/SchemaData.md), `any`\>\>

#### Defined in

[client/api.ts:2543](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b17abbe/src/lib/client/api.ts#L2543)

___

### \_import

▸ **_import**(`stage`, `schemaData`, `options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`Throws`**

**`Memberof`**

StageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stage` | `string` |  |
| `schemaData` | [`SchemaData`](../interfaces/SchemaData.md) |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[client/api.ts:2555](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b17abbe/src/lib/client/api.ts#L2555)

___

### exists

▸ **exists**(`stage`, `options?`): `Promise`<`AxiosResponse`<`boolean`, `any`\>\>

**`Throws`**

**`Memberof`**

StageApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stage` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`boolean`, `any`\>\>

#### Defined in

[client/api.ts:2566](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b17abbe/src/lib/client/api.ts#L2566)
