[Lambda ORM client](../README.md) / SchemaService

# SchemaService

## Table of contents

### Methods

- [dataSources](SchemaService.md#datasources)
- [entities](SchemaService.md#entities)
- [entity](SchemaService.md#entity)
- [entityMapping](SchemaService.md#entitymapping)
- [enum](SchemaService.md#enum)
- [enums](SchemaService.md#enums)
- [mapping](SchemaService.md#mapping)
- [mappings](SchemaService.md#mappings)
- [stage](SchemaService.md#stage)
- [stages](SchemaService.md#stages)

## Methods

### dataSources

▸ **dataSources**(): `Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Returns

`Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[application/SchemaService.ts:3](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L3)

___

### entities

▸ **entities**(): `Promise`<[`Entity`](Entity.md)[]\>

#### Returns

`Promise`<[`Entity`](Entity.md)[]\>

#### Defined in

[application/SchemaService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L4)

___

### entity

▸ **entity**(`entity`): `Promise`<`undefined` \| [`Entity`](Entity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `string` |

#### Returns

`Promise`<`undefined` \| [`Entity`](Entity.md)\>

#### Defined in

[application/SchemaService.ts:5](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L5)

___

### entityMapping

▸ **entityMapping**(`mapping`, `entity`): `Promise`<`undefined` \| [`EntityMapping`](EntityMapping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |
| `entity` | `string` |

#### Returns

`Promise`<`undefined` \| [`EntityMapping`](EntityMapping.md)\>

#### Defined in

[application/SchemaService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L10)

___

### enum

▸ **enum**(`_enum`): `Promise`<`undefined` \| [`Enum`](Enum.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_enum` | `string` |

#### Returns

`Promise`<`undefined` \| [`Enum`](Enum.md)\>

#### Defined in

[application/SchemaService.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L7)

___

### enums

▸ **enums**(): `Promise`<[`Enum`](Enum.md)[]\>

#### Returns

`Promise`<[`Enum`](Enum.md)[]\>

#### Defined in

[application/SchemaService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L6)

___

### mapping

▸ **mapping**(`mapping`): `Promise`<`undefined` \| [`Mapping`](Mapping.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | `string` |

#### Returns

`Promise`<`undefined` \| [`Mapping`](Mapping.md)\>

#### Defined in

[application/SchemaService.ts:9](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L9)

___

### mappings

▸ **mappings**(): `Promise`<[`Mapping`](Mapping.md)[]\>

#### Returns

`Promise`<[`Mapping`](Mapping.md)[]\>

#### Defined in

[application/SchemaService.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L8)

___

### stage

▸ **stage**(`stage`): `Promise`<`undefined` \| [`Stage`](Stage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |

#### Returns

`Promise`<`undefined` \| [`Stage`](Stage.md)\>

#### Defined in

[application/SchemaService.ts:12](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L12)

___

### stages

▸ **stages**(): `Promise`<[`Stage`](Stage.md)[]\>

#### Returns

`Promise`<[`Stage`](Stage.md)[]\>

#### Defined in

[application/SchemaService.ts:11](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/b5acaf4/src/lib/application/SchemaService.ts#L11)
