[Lambda ORM client](../README.md) / GeneralApi

# GeneralApi

GeneralApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`GeneralApi`**

## Table of contents

### Constructors

- [constructor](GeneralApi.md#constructor)

### Methods

- [health](GeneralApi.md#health)
- [metrics](GeneralApi.md#metrics)
- [ping](GeneralApi.md#ping)

## Constructors

### constructor

• **new GeneralApi**(`configuration`, `axios?`): [`GeneralApi`](GeneralApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`GeneralApi`](GeneralApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[application/services/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/application/services/base.ts#L50)

## Methods

### health

▸ **health**(`options?`): `Promise`<`AxiosResponse`<[`Health`](../interfaces/Health.md), `any`\>\>

**`Throws`**

**`Memberof`**

GeneralApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Health`](../interfaces/Health.md), `any`\>\>

#### Defined in

[application/services/generalService.ts:180](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/application/services/generalService.ts#L180)

___

### metrics

▸ **metrics**(`options?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

**`Throws`**

**`Memberof`**

GeneralApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[application/services/generalService.ts:190](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/application/services/generalService.ts#L190)

___

### ping

▸ **ping**(`options?`): `Promise`<`AxiosResponse`<[`Ping`](../interfaces/Ping.md), `any`\>\>

**`Throws`**

**`Memberof`**

GeneralApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Ping`](../interfaces/Ping.md), `any`\>\>

#### Defined in

[application/services/generalService.ts:200](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b13c123/src/lib/application/services/generalService.ts#L200)
