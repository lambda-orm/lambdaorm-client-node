[Lambda ORM client](../README.md) / SchemaApi

# Class: SchemaApi

SchemaApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SchemaApi`**

## Table of contents

### Constructors

- [constructor](SchemaApi.md#constructor)

### Methods

- [\_enum](SchemaApi.md#_enum)
- [dataSources](SchemaApi.md#datasources)
- [datasource](SchemaApi.md#datasource)
- [entities](SchemaApi.md#entities)
- [entity](SchemaApi.md#entity)
- [entityMapping](SchemaApi.md#entitymapping)
- [enums](SchemaApi.md#enums)
- [mapping](SchemaApi.md#mapping)
- [mappings](SchemaApi.md#mappings)
- [stage](SchemaApi.md#stage)
- [stages](SchemaApi.md#stages)

## Constructors

### constructor

• **new SchemaApi**(`configuration`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[client/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/base.ts#L50)

## Methods

### \_enum

▸ **_enum**(`_enum`, `options?`): `Promise`<`AxiosResponse`<[`Enum`](../interfaces/Enum.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_enum` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Enum`](../interfaces/Enum.md), `any`\>\>

#### Defined in

[client/api.ts:2224](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2224)

___

### dataSources

▸ **dataSources**(`options?`): `Promise`<`AxiosResponse`<[`DataSource`](../interfaces/DataSource.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`DataSource`](../interfaces/DataSource.md)[], `any`\>\>

#### Defined in

[client/api.ts:2234](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2234)

___

### datasource

▸ **datasource**(`datasource`, `options?`): `Promise`<`AxiosResponse`<[`DataSource`](../interfaces/DataSource.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `datasource` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`DataSource`](../interfaces/DataSource.md), `any`\>\>

#### Defined in

[client/api.ts:2245](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2245)

___

### entities

▸ **entities**(`options?`): `Promise`<`AxiosResponse`<[`Entity`](../interfaces/Entity.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Entity`](../interfaces/Entity.md)[], `any`\>\>

#### Defined in

[client/api.ts:2255](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2255)

___

### entity

▸ **entity**(`entity`, `options?`): `Promise`<`AxiosResponse`<[`Entity`](../interfaces/Entity.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Entity`](../interfaces/Entity.md), `any`\>\>

#### Defined in

[client/api.ts:2266](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2266)

___

### entityMapping

▸ **entityMapping**(`mapping`, `entity`, `options?`): `Promise`<`AxiosResponse`<[`EntityMapping`](../interfaces/EntityMapping.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapping` | `string` |  |
| `entity` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`EntityMapping`](../interfaces/EntityMapping.md), `any`\>\>

#### Defined in

[client/api.ts:2278](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2278)

___

### enums

▸ **enums**(`options?`): `Promise`<`AxiosResponse`<[`Enum`](../interfaces/Enum.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Enum`](../interfaces/Enum.md)[], `any`\>\>

#### Defined in

[client/api.ts:2288](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2288)

___

### mapping

▸ **mapping**(`mapping`, `options?`): `Promise`<`AxiosResponse`<[`Mapping`](../interfaces/Mapping.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapping` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Mapping`](../interfaces/Mapping.md), `any`\>\>

#### Defined in

[client/api.ts:2299](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2299)

___

### mappings

▸ **mappings**(`options?`): `Promise`<`AxiosResponse`<[`Mapping`](../interfaces/Mapping.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Mapping`](../interfaces/Mapping.md)[], `any`\>\>

#### Defined in

[client/api.ts:2309](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2309)

___

### stage

▸ **stage**(`stage`, `options?`): `Promise`<`AxiosResponse`<[`Stage`](../interfaces/Stage.md), `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stage` | `string` |  |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Stage`](../interfaces/Stage.md), `any`\>\>

#### Defined in

[client/api.ts:2320](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2320)

___

### stages

▸ **stages**(`options?`): `Promise`<`AxiosResponse`<[`Stage`](../interfaces/Stage.md)[], `any`\>\>

**`Throws`**

**`Memberof`**

SchemaApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Stage`](../interfaces/Stage.md)[], `any`\>\>

#### Defined in

[client/api.ts:2330](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/72895a2/src/lib/client/api.ts#L2330)
