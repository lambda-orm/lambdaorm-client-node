[Lambda ORM client](../README.md) / ClientSchemaService

# Interface: ClientSchemaService

## Table of contents

### Methods

- [domain](ClientSchemaService.md#domain)
- [entities](ClientSchemaService.md#entities)
- [entity](ClientSchemaService.md#entity)
- [entityMapping](ClientSchemaService.md#entitymapping)
- [enum](ClientSchemaService.md#enum)
- [enums](ClientSchemaService.md#enums)
- [mapping](ClientSchemaService.md#mapping)
- [mappings](ClientSchemaService.md#mappings)
- [schema](ClientSchemaService.md#schema)
- [source](ClientSchemaService.md#source)
- [sources](ClientSchemaService.md#sources)
- [stage](ClientSchemaService.md#stage)
- [stages](ClientSchemaService.md#stages)
- [version](ClientSchemaService.md#version)
- [views](ClientSchemaService.md#views)

## Methods

### domain

▸ **domain**(): `Promise`\<[`DomainSchema`](DomainSchema.md)\>

#### Returns

`Promise`\<[`DomainSchema`](DomainSchema.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:5](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L5)

___

### entities

▸ **entities**(): `Promise`\<[`Entity`](Entity.md)[]\>

#### Returns

`Promise`\<[`Entity`](Entity.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:8](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L8)

___

### entity

▸ **entity**(`entity`): `Promise`\<`undefined` \| [`Entity`](Entity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Entity`](Entity.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:9](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L9)

___

### entityMapping

▸ **entityMapping**(`mapping`, `entity`): `Promise`\<`undefined` \| [`EntityMapping`](EntityMapping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |
| `entity` | `string` |

#### Returns

`Promise`\<`undefined` \| [`EntityMapping`](EntityMapping.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:14](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L14)

___

### enum

▸ **enum**(`_enum`): `Promise`\<`undefined` \| [`Enum`](Enum.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_enum` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Enum`](Enum.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:11](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L11)

___

### enums

▸ **enums**(): `Promise`\<[`Enum`](Enum.md)[]\>

#### Returns

`Promise`\<[`Enum`](Enum.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:10](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L10)

___

### mapping

▸ **mapping**(`mapping`): `Promise`\<`undefined` \| [`Mapping`](Mapping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Mapping`](Mapping.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:13](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L13)

___

### mappings

▸ **mappings**(): `Promise`\<[`Mapping`](Mapping.md)[]\>

#### Returns

`Promise`\<[`Mapping`](Mapping.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:12](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L12)

___

### schema

▸ **schema**(): `Promise`\<[`Schema`](Schema.md)\>

#### Returns

`Promise`\<[`Schema`](Schema.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:4](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L4)

___

### source

▸ **source**(`source`): `Promise`\<\{ `dialect`: `string` ; `name`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`Promise`\<\{ `dialect`: `string` ; `name`: `string`  }\>

#### Defined in

[src/lib/application/services/SchemaService.ts:7](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L7)

___

### sources

▸ **sources**(): `Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Returns

`Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:6](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L6)

___

### stage

▸ **stage**(`stage`): `Promise`\<`undefined` \| [`Stage`](Stage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Stage`](Stage.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:16](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L16)

___

### stages

▸ **stages**(): `Promise`\<[`Stage`](Stage.md)[]\>

#### Returns

`Promise`\<[`Stage`](Stage.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:15](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L15)

___

### version

▸ **version**(): `Promise`\<\{ `version`: `string`  }\>

#### Returns

`Promise`\<\{ `version`: `string`  }\>

#### Defined in

[src/lib/application/services/SchemaService.ts:3](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L3)

___

### views

▸ **views**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:17](https://github.com/lambda-orm/lambdaorm-client-node/blob/94c96ec28de1a2050723593cb991dc0ebf39ded6/src/lib/application/services/SchemaService.ts#L17)
