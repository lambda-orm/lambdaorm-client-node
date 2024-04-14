[Lambda ORM client](../README.md) / StageService

# Interface: StageService

## Table of contents

### Methods

- [exists](StageService.md#exists)
- [export](StageService.md#export)
- [import](StageService.md#import)

## Methods

### exists

▸ **exists**(`stage`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/lib/application/services/StageService.ts:3](https://github.com/lambda-orm/lambdaorm-client-node/blob/dd8b889/src/lib/application/services/StageService.ts#L3)

___

### export

▸ **export**(`stage`): `Promise`\<[`SchemaData`](SchemaData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |

#### Returns

`Promise`\<[`SchemaData`](SchemaData.md)\>

#### Defined in

[src/lib/application/services/StageService.ts:4](https://github.com/lambda-orm/lambdaorm-client-node/blob/dd8b889/src/lib/application/services/StageService.ts#L4)

___

### import

▸ **import**(`stage`, `data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | `string` |
| `data` | [`SchemaData`](SchemaData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/lib/application/services/StageService.ts:5](https://github.com/lambda-orm/lambdaorm-client-node/blob/dd8b889/src/lib/application/services/StageService.ts#L5)
