[Lambda ORM client](../README.md) / StageApi

# StageApi

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

• **new StageApi**(`configuration`, `axios?`): [`StageApi`](StageApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`StageApi`](StageApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[application/services/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/services/base.ts#L50)

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

[application/services/stageService.ts:207](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/services/stageService.ts#L207)

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

[application/services/stageService.ts:219](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/services/stageService.ts#L219)

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

[application/services/stageService.ts:230](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/cf1dba5/src/lib/application/services/stageService.ts#L230)
