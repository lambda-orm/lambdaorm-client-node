Lambda ORM client

# Lambda ORM client

## Table of contents

### Enumerations

- [RelationType](enums/RelationType.md)

### Classes

- [Configuration](classes/Configuration.md)
- [ExpressionActions](classes/ExpressionActions.md)
- [ExpressionApi](classes/ExpressionApi.md)
- [FilterClauses](classes/FilterClauses.md)
- [FilterIncludeClauses](classes/FilterIncludeClauses.md)
- [GeneralApi](classes/GeneralApi.md)
- [HavingClauses](classes/HavingClauses.md)
- [IncludeClauses](classes/IncludeClauses.md)
- [Map2Clauses](classes/Map2Clauses.md)
- [MapClauses](classes/MapClauses.md)
- [OrmClient](classes/OrmClient.md)
- [PageClauses](classes/PageClauses.md)
- [QueryAction](classes/QueryAction.md)
- [Queryable](classes/Queryable.md)
- [Repository](classes/Repository.md)
- [SchemaApi](classes/SchemaApi.md)
- [SentenceLibrary](classes/SentenceLibrary.md)
- [StageApi](classes/StageApi.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Constraint](interfaces/Constraint.md)
- [DataSource](interfaces/DataSource.md)
- [Dependent](interfaces/Dependent.md)
- [Entity](interfaces/Entity.md)
- [EntityMapping](interfaces/EntityMapping.md)
- [Enum](interfaces/Enum.md)
- [EnumValue](interfaces/EnumValue.md)
- [Health](interfaces/Health.md)
- [IOrmClient](interfaces/IOrmClient.md)
- [Index](interfaces/Index.md)
- [Mapping](interfaces/Mapping.md)
- [Metadata](interfaces/Metadata.md)
- [MetadataConstraint](interfaces/MetadataConstraint.md)
- [MetadataModel](interfaces/MetadataModel.md)
- [MetadataParameter](interfaces/MetadataParameter.md)
- [MetadataSentence](interfaces/MetadataSentence.md)
- [Parameter](interfaces/Parameter.md)
- [Ping](interfaces/Ping.md)
- [Property](interfaces/Property.md)
- [PropertyMapping](interfaces/PropertyMapping.md)
- [QueryOptions](interfaces/QueryOptions.md)
- [QueryQueuedRequest](interfaces/QueryQueuedRequest.md)
- [QueryRequest](interfaces/QueryRequest.md)
- [QueryResponse](interfaces/QueryResponse.md)
- [Relation](interfaces/Relation.md)
- [RuleDataSource](interfaces/RuleDataSource.md)
- [SchemaData](interfaces/SchemaData.md)
- [SchemaDataEntity](interfaces/SchemaDataEntity.md)
- [Stage](interfaces/Stage.md)

### Variables

- [ormClient](README.md#ormclient)

### Functions

- [ExpressionApiAxiosParamCreator](README.md#expressionapiaxiosparamcreator)
- [ExpressionApiFactory](README.md#expressionapifactory)
- [ExpressionApiFp](README.md#expressionapifp)
- [GeneralApiAxiosParamCreator](README.md#generalapiaxiosparamcreator)
- [GeneralApiFactory](README.md#generalapifactory)
- [GeneralApiFp](README.md#generalapifp)
- [SchemaApiAxiosParamCreator](README.md#schemaapiaxiosparamcreator)
- [SchemaApiFactory](README.md#schemaapifactory)
- [SchemaApiFp](README.md#schemaapifp)
- [StageApiAxiosParamCreator](README.md#stageapiaxiosparamcreator)
- [StageApiFactory](README.md#stageapifactory)
- [StageApiFp](README.md#stageapifp)

## Variables

### ormClient

• `Const` **ormClient**: [`OrmClient`](classes/OrmClient.md) = `OrmClient.instance`

#### Defined in

[index.ts:6](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/index.ts#L6)

## Functions

### ExpressionApiAxiosParamCreator

▸ **ExpressionApiAxiosParamCreator**(`configuration`): `Object`

ExpressionApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `constraints` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `execute` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `metadata` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `model` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `parameters` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `sentence` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[client/api.ts:990](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L990)

___

### ExpressionApiFactory

▸ **ExpressionApiFactory**(`configuration`, `basePath?`, `axios?`): `Object`

ExpressionApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `constraints` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<[`MetadataConstraint`](interfaces/MetadataConstraint.md)\> |
| `execute` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<`any`\> |
| `metadata` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<[`Metadata`](interfaces/Metadata.md)\> |
| `model` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<[`MetadataModel`](interfaces/MetadataModel.md)[]\> |
| `parameters` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<[`MetadataParameter`](interfaces/MetadataParameter.md)[]\> |
| `sentence` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `any`) => `AxiosPromise`<[`MetadataSentence`](interfaces/MetadataSentence.md)\> |

#### Defined in

[client/api.ts:1281](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1281)

___

### ExpressionApiFp

▸ **ExpressionApiFp**(`configuration`): `Object`

ExpressionApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `constraints` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MetadataConstraint`](interfaces/MetadataConstraint.md)\>\> |
| `execute` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `executeQueued` | (`queryQueuedRequest`: [`QueryQueuedRequest`](interfaces/QueryQueuedRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `metadata` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Metadata`](interfaces/Metadata.md)\>\> |
| `model` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MetadataModel`](interfaces/MetadataModel.md)[]\>\> |
| `parameters` | (`queryRequest?`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MetadataParameter`](interfaces/MetadataParameter.md)[]\>\> |
| `sentence` | (`queryRequest`: [`QueryRequest`](interfaces/QueryRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MetadataSentence`](interfaces/MetadataSentence.md)\>\> |

#### Defined in

[client/api.ts:1201](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1201)

___

### GeneralApiAxiosParamCreator

▸ **GeneralApiAxiosParamCreator**(`configuration`): `Object`

GeneralApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `health` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `metrics` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `ping` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[client/api.ts:1431](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1431)

___

### GeneralApiFactory

▸ **GeneralApiFactory**(`configuration`, `basePath?`, `axios?`): `Object`

GeneralApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `health` | (`options?`: `any`) => `AxiosPromise`<[`Health`](interfaces/Health.md)\> |
| `metrics` | (`options?`: `any`) => `AxiosPromise`<`any`\> |
| `ping` | (`options?`: `any`) => `AxiosPromise`<[`Ping`](interfaces/Ping.md)\> |

#### Defined in

[client/api.ts:1564](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1564)

___

### GeneralApiFp

▸ **GeneralApiFp**(`configuration`): `Object`

GeneralApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `health` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Health`](interfaces/Health.md)\>\> |
| `metrics` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `ping` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Ping`](interfaces/Ping.md)\>\> |

#### Defined in

[client/api.ts:1527](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1527)

___

### SchemaApiAxiosParamCreator

▸ **SchemaApiAxiosParamCreator**(`configuration`): `Object`

SchemaApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_enum` | (`_enum`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `dataSources` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `datasource` | (`datasource`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `entities` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `entity` | (`entity`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `entityMapping` | (`mapping`: `string`, `entity`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `enums` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `mapping` | (`mapping`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `mappings` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `stage` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `stages` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[client/api.ts:1637](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1637)

___

### SchemaApiFactory

▸ **SchemaApiFactory**(`configuration`, `axios?`): `Object`

SchemaApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_enum` | (`_enum`: `string`, `options?`: `any`) => `AxiosPromise`<[`Enum`](interfaces/Enum.md)\> |
| `dataSources` | (`options?`: `any`) => `AxiosPromise`<[`DataSource`](interfaces/DataSource.md)[]\> |
| `datasource` | (`datasource`: `string`, `options?`: `any`) => `AxiosPromise`<[`DataSource`](interfaces/DataSource.md)\> |
| `entities` | (`options?`: `any`) => `AxiosPromise`<[`Entity`](interfaces/Entity.md)[]\> |
| `entity` | (`entity`: `string`, `options?`: `any`) => `AxiosPromise`<[`Entity`](interfaces/Entity.md)\> |
| `entityMapping` | (`mapping`: `string`, `entity`: `string`, `options?`: `any`) => `AxiosPromise`<[`EntityMapping`](interfaces/EntityMapping.md)\> |
| `enums` | (`options?`: `any`) => `AxiosPromise`<[`Enum`](interfaces/Enum.md)[]\> |
| `mapping` | (`mapping`: `string`, `options?`: `any`) => `AxiosPromise`<[`Mapping`](interfaces/Mapping.md)\> |
| `mappings` | (`options?`: `any`) => `AxiosPromise`<[`Mapping`](interfaces/Mapping.md)[]\> |
| `stage` | (`stage`: `string`, `options?`: `any`) => `AxiosPromise`<[`Stage`](interfaces/Stage.md)\> |
| `stages` | (`options?`: `any`) => `AxiosPromise`<[`Stage`](interfaces/Stage.md)[]\> |

#### Defined in

[client/api.ts:2109](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L2109)

___

### SchemaApiFp

▸ **SchemaApiFp**(`configuration`): `Object`

SchemaApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_enum` | (`_enum`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Enum`](interfaces/Enum.md)\>\> |
| `dataSources` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`DataSource`](interfaces/DataSource.md)[]\>\> |
| `datasource` | (`datasource`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`DataSource`](interfaces/DataSource.md)\>\> |
| `entities` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Entity`](interfaces/Entity.md)[]\>\> |
| `entity` | (`entity`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Entity`](interfaces/Entity.md)\>\> |
| `entityMapping` | (`mapping`: `string`, `entity`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`EntityMapping`](interfaces/EntityMapping.md)\>\> |
| `enums` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Enum`](interfaces/Enum.md)[]\>\> |
| `mapping` | (`mapping`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Mapping`](interfaces/Mapping.md)\>\> |
| `mappings` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Mapping`](interfaces/Mapping.md)[]\>\> |
| `stage` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Stage`](interfaces/Stage.md)\>\> |
| `stages` | (`options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Stage`](interfaces/Stage.md)[]\>\> |

#### Defined in

[client/api.ts:1993](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L1993)

___

### StageApiAxiosParamCreator

▸ **StageApiAxiosParamCreator**(`configuration`): `Object`

StageApi - axios parameter creator

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_export` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `_import` | (`stage`: `string`, `schemaData`: [`SchemaData`](interfaces/SchemaData.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `exists` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

#### Defined in

[client/api.ts:2340](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L2340)

___

### StageApiFactory

▸ **StageApiFactory**(`configuration`, `basePath?`, `axios?`): `Object`

StageApi - factory interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_export` | (`stage`: `string`, `options?`: `any`) => `AxiosPromise`<[`SchemaData`](interfaces/SchemaData.md)\> |
| `_import` | (`stage`: `string`, `schemaData`: [`SchemaData`](interfaces/SchemaData.md), `options?`: `any`) => `AxiosPromise`<`any`\> |
| `exists` | (`stage`: `string`, `options?`: `any`) => `AxiosPromise`<`boolean`\> |

#### Defined in

[client/api.ts:2495](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L2495)

___

### StageApiFp

▸ **StageApiFp**(`configuration`): `Object`

StageApi - functional programming interface

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_export` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SchemaData`](interfaces/SchemaData.md)\>\> |
| `_import` | (`stage`: `string`, `schemaData`: [`SchemaData`](interfaces/SchemaData.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`any`\>\> |
| `exists` | (`stage`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<`boolean`\>\> |

#### Defined in

[client/api.ts:2454](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/dc8a5fe/src/lib/client/api.ts#L2454)
