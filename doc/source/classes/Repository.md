[Lambda ORM client](../README.md) / Repository

# Repository<TEntity, TQuery\>

## Type parameters

| Name |
| :------ |
| `TEntity` |
| `TQuery` |

## Table of contents

### Constructors

- [constructor](Repository.md#constructor)

### Properties

- [name](Repository.md#name)
- [stage](Repository.md#stage)

### Methods

- [bulkInsert](Repository.md#bulkinsert)
- [delete](Repository.md#delete)
- [deleteAll](Repository.md#deleteall)
- [distinct](Repository.md#distinct)
- [execute](Repository.md#execute)
- [executeQueued](Repository.md#executequeued)
- [first](Repository.md#first)
- [insert](Repository.md#insert)
- [last](Repository.md#last)
- [list](Repository.md#list)
- [merge](Repository.md#merge)
- [query](Repository.md#query)
- [take](Repository.md#take)
- [update](Repository.md#update)
- [updateAll](Repository.md#updateall)

## Constructors

### constructor

• **new Repository**<`TEntity`, `TQuery`\>(`name`, `stage?`, `Orm?`): [`Repository`](Repository.md)<`TEntity`, `TQuery`\>

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TQuery` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `stage?` | `string` |
| `Orm?` | [`IOrmClient`](../interfaces/IOrmClient.md) |

#### Returns

[`Repository`](Repository.md)<`TEntity`, `TQuery`\>

#### Defined in

[manager/repository.ts:10](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L10)

## Properties

### name

• **name**: `string`

#### Defined in

[manager/repository.ts:7](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L7)

___

### stage

• `Optional` **stage**: `string`

#### Defined in

[manager/repository.ts:8](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L8)

## Methods

### bulkInsert

▸ **bulkInsert**(`entities`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[manager/repository.ts:49](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L49)

▸ **bulkInsert**(`entities`, `include`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `TEntity`[] |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[manager/repository.ts:51](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L51)

___

### delete

▸ **delete**(`entity`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:81](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L81)

▸ **delete**(`entity`, `include`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:83](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L83)

___

### deleteAll

▸ **deleteAll**(`data`, `filter?`, `include?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:88](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L88)

___

### distinct

▸ **distinct**(`data`, `filter?`, `include?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[manager/repository.ts:102](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L102)

___

### execute

▸ **execute**(`expression`, `data?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[manager/repository.ts:32](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L32)

___

### executeQueued

▸ **executeQueued**(`topic`, `expression`, `data?`, `chunk?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `expression` | `string` |
| `data?` | `any` |
| `chunk?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[manager/repository.ts:36](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L36)

___

### first

▸ **first**(`data`, `filter?`, `include?`): `Promise`<``null`` \| `TEntity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<``null`` \| `TEntity`\>

#### Defined in

[manager/repository.ts:109](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L109)

___

### insert

▸ **insert**(`entity`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`<`any`\>

#### Defined in

[manager/repository.ts:41](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L41)

▸ **insert**(`entity`, `include`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`any`\>

#### Defined in

[manager/repository.ts:43](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L43)

___

### last

▸ **last**(`data`, `filter?`, `include?`): `Promise`<``null`` \| `TEntity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<``null`` \| `TEntity`\>

#### Defined in

[manager/repository.ts:121](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L121)

___

### list

▸ **list**(`data`, `filter?`, `include?`): `Promise`<`TEntity`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`TEntity`[]\>

#### Defined in

[manager/repository.ts:95](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L95)

___

### merge

▸ **merge**(`entity`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:73](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L73)

▸ **merge**(`entity`, `include`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:75](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L75)

___

### query

▸ **query**(): [`Queryable`](Queryable.md)<`TQuery`\>

#### Returns

[`Queryable`](Queryable.md)<`TQuery`\>

#### Defined in

[manager/repository.ts:145](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L145)

___

### take

▸ **take**(`data`, `filter?`, `include?`): `Promise`<``null`` \| `TEntity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<``null`` \| `TEntity`\>

#### Defined in

[manager/repository.ts:133](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L133)

___

### update

▸ **update**(`entity`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:57](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L57)

▸ **update**(`entity`, `include`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `include` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:59](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L59)

___

### updateAll

▸ **updateAll**(`data`, `map`, `filter?`, `include?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `map` | (`value`: `TEntity`) => `unknown` |
| `filter?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |
| `include?` | (`value`: `TQuery`, `index`: `number`, `array`: `TQuery`[]) => `unknown` |

#### Returns

`Promise`<`number`\>

#### Defined in

[manager/repository.ts:64](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/ef76354/src/lib/manager/repository.ts#L64)
