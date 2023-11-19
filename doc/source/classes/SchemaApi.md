[Lambda ORM client](../README.md) / SchemaApi

# SchemaApi

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

• **new SchemaApi**(`configuration`, `axios?`): [`SchemaApi`](SchemaApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `undefined` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SchemaApi`](SchemaApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[application/services/base.ts:50](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/base.ts#L50)

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

[application/services/schemaService.ts:575](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L575)

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

[application/services/schemaService.ts:585](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L585)

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

[application/services/schemaService.ts:596](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L596)

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

[application/services/schemaService.ts:606](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L606)

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

[application/services/schemaService.ts:617](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L617)

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

[application/services/schemaService.ts:629](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L629)

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

[application/services/schemaService.ts:639](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L639)

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

[application/services/schemaService.ts:650](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L650)

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

[application/services/schemaService.ts:660](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L660)

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

[application/services/schemaService.ts:671](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L671)

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

[application/services/schemaService.ts:681](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/daf068a/src/lib/application/services/schemaService.ts#L681)
