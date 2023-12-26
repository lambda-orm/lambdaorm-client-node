[Lambda ORM client](../README.md) / SchemaService

# Interface: SchemaService

## Table of contents

### Methods

- [domain](SchemaService.md#domain)
- [entities](SchemaService.md#entities)
- [entity](SchemaService.md#entity)
- [entityMapping](SchemaService.md#entitymapping)
- [enum](SchemaService.md#enum)
- [enums](SchemaService.md#enums)
- [mapping](SchemaService.md#mapping)
- [mappings](SchemaService.md#mappings)
- [schema](SchemaService.md#schema)
- [source](SchemaService.md#source)
- [sources](SchemaService.md#sources)
- [stage](SchemaService.md#stage)
- [stages](SchemaService.md#stages)
- [version](SchemaService.md#version)
- [views](SchemaService.md#views)

## Methods

### domain

▸ **domain**(): `Promise`\<[`DomainSchema`](DomainSchema.md)\>

#### Returns

`Promise`\<[`DomainSchema`](DomainSchema.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:5](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L5)

___

### entities

▸ **entities**(): `Promise`\<[`Entity`](Entity.md)[]\>

#### Returns

`Promise`\<[`Entity`](Entity.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L8)

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

[src/lib/application/services/SchemaService.ts:9](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L9)

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

[src/lib/application/services/SchemaService.ts:14](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L14)

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

[src/lib/application/services/SchemaService.ts:11](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L11)

___

### enums

▸ **enums**(): `Promise`\<[`Enum`](Enum.md)[]\>

#### Returns

`Promise`\<[`Enum`](Enum.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L10)

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

[src/lib/application/services/SchemaService.ts:13](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L13)

___

### mappings

▸ **mappings**(): `Promise`\<[`Mapping`](Mapping.md)[]\>

#### Returns

`Promise`\<[`Mapping`](Mapping.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L12)

___

### schema

▸ **schema**(): `Promise`\<[`Schema`](Schema.md)\>

#### Returns

`Promise`\<[`Schema`](Schema.md)\>

#### Defined in

[src/lib/application/services/SchemaService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L4)

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

[src/lib/application/services/SchemaService.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L7)

___

### sources

▸ **sources**(): `Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Returns

`Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L6)

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

[src/lib/application/services/SchemaService.ts:16](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L16)

___

### stages

▸ **stages**(): `Promise`\<[`Stage`](Stage.md)[]\>

#### Returns

`Promise`\<[`Stage`](Stage.md)[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:15](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L15)

___

### version

▸ **version**(): `Promise`\<\{ `version`: `string`  }\>

#### Returns

`Promise`\<\{ `version`: `string`  }\>

#### Defined in

[src/lib/application/services/SchemaService.ts:3](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L3)

___

### views

▸ **views**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/lib/application/services/SchemaService.ts:17](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/8ed2de9/src/lib/application/services/SchemaService.ts#L17)
