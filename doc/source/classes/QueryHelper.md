[Lambda ORM client](../README.md) / QueryHelper

# Class: QueryHelper

## Table of contents

### Constructors

- [constructor](QueryHelper.md#constructor)

### Methods

- [arrayToList](QueryHelper.md#arraytolist)
- [bufferToString](QueryHelper.md#buffertostring)
- [dateFormat](QueryHelper.md#dateformat)
- [dateToString](QueryHelper.md#datetostring)
- [escape](QueryHelper.md#escape)
- [escapeId](QueryHelper.md#escapeid)
- [format](QueryHelper.md#format)
- [getInfo](QueryHelper.md#getinfo)
- [getSentenceCategory](QueryHelper.md#getsentencecategory)
- [getSentenceType](QueryHelper.md#getsentencetype)
- [raw](QueryHelper.md#raw)
- [transformParameter](QueryHelper.md#transformparameter)

## Constructors

### constructor

• **new QueryHelper**(`str`): [`QueryHelper`](QueryHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `IStringHelper` |

#### Returns

[`QueryHelper`](QueryHelper.md)

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:13

## Methods

### arrayToList

▸ **arrayToList**(`array`, `timeZone`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `timeZone` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:16

___

### bufferToString

▸ **bufferToString**(`buffer`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:20

___

### dateFormat

▸ **dateFormat**(`value`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:19

___

### dateToString

▸ **dateToString**(`date`, `timeZone?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `timeZone?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:18

___

### escape

▸ **escape**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:15

___

### escapeId

▸ **escapeId**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:14

___

### format

▸ **format**(`sql`, `values`, `stringifyObjects`, `timeZone`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `values` | `any`[] |
| `stringifyObjects` | `string` |
| `timeZone` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:17

___

### getInfo

▸ **getInfo**(`action`, `entity`, `type?`): [`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |
| `entity` | `string` |
| `type?` | [`SentenceType`](../enums/SentenceType.md) |

#### Returns

[`SentenceInfo`](../interfaces/SentenceInfo.md)

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:25

___

### getSentenceCategory

▸ **getSentenceCategory**(`action`): [`SentenceCategory`](../enums/SentenceCategory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |

#### Returns

[`SentenceCategory`](../enums/SentenceCategory.md)

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:24

___

### getSentenceType

▸ **getSentenceType**(`action`): [`SentenceType`](../enums/SentenceType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`SentenceAction`](../enums/SentenceAction.md) |

#### Returns

[`SentenceType`](../enums/SentenceType.md)

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:23

___

### raw

▸ **raw**(`sql`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:21

___

### transformParameter

▸ **transformParameter**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

node_modules/lambdaorm-base/shared/infrastructure/helper.d.ts:22
