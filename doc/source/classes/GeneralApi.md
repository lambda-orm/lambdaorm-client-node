[Lambda ORM client](../README.md) / GeneralApi

# Class: GeneralApi

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

• **new GeneralApi**(`configuration`, `axios?`)

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

[client/api.ts:1607](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1607)

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

[client/api.ts:1617](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1617)

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

[client/api.ts:1627](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/4059abb/src/lib/client/api.ts#L1627)
