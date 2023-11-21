Lambda ORM client

# Lambda ORM client

## Table of contents

### Enumerations

- [RelationType](enums/RelationType.md)

### Classes

- [Configuration](classes/Configuration.md)
- [ExpressionActions](classes/ExpressionActions.md)
- [FilterAction](classes/FilterAction.md)
- [FilterClauses](classes/FilterClauses.md)
- [FilterIncludeClauses](classes/FilterIncludeClauses.md)
- [HavingClauses](classes/HavingClauses.md)
- [IncludeAction](classes/IncludeAction.md)
- [IncludeClauses](classes/IncludeClauses.md)
- [Map2Clauses](classes/Map2Clauses.md)
- [MapClauses](classes/MapClauses.md)
- [ModificableClauses](classes/ModificableClauses.md)
- [Orm](classes/Orm.md)
- [PageClauses](classes/PageClauses.md)
- [QueryAction](classes/QueryAction.md)
- [Queryable](classes/Queryable.md)
- [Repository](classes/Repository.md)
- [SentenceLibrary](classes/SentenceLibrary.md)

### Interfaces

- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Constraint](interfaces/Constraint.md)
- [DataSource](interfaces/DataSource.md)
- [Dependent](interfaces/Dependent.md)
- [Entity](interfaces/Entity.md)
- [EntityMapping](interfaces/EntityMapping.md)
- [Enum](interfaces/Enum.md)
- [EnumValue](interfaces/EnumValue.md)
- [ExpressionService](interfaces/ExpressionService.md)
- [GeneralService](interfaces/GeneralService.md)
- [Health](interfaces/Health.md)
- [IOrm](interfaces/IOrm.md)
- [IRelation](interfaces/IRelation.md)
- [Index](interfaces/Index.md)
- [Mapping](interfaces/Mapping.md)
- [Metadata](interfaces/Metadata.md)
- [MetadataConstraint](interfaces/MetadataConstraint.md)
- [MetadataModel](interfaces/MetadataModel.md)
- [MetadataParameter](interfaces/MetadataParameter.md)
- [MetadataSentence](interfaces/MetadataSentence.md)
- [ModifyAllClauses](interfaces/ModifyAllClauses.md)
- [ModifyClauses](interfaces/ModifyClauses.md)
- [ModifyFilterClauses](interfaces/ModifyFilterClauses.md)
- [ModifyIncludeClauses](interfaces/ModifyIncludeClauses.md)
- [Parameter](interfaces/Parameter.md)
- [Ping](interfaces/Ping.md)
- [Property](interfaces/Property.md)
- [PropertyMapping](interfaces/PropertyMapping.md)
- [QueryOptions](interfaces/QueryOptions.md)
- [QueryQueuedRequest](interfaces/QueryQueuedRequest.md)
- [QueryRequest](interfaces/QueryRequest.md)
- [QueryResponse](interfaces/QueryResponse.md)
- [Relation](interfaces/Relation.md)
- [RelationIncludeClauses](interfaces/RelationIncludeClauses.md)
- [RelationMapClauses](interfaces/RelationMapClauses.md)
- [RuleDataSource](interfaces/RuleDataSource.md)
- [Schema](interfaces/Schema.md)
- [SchemaConfig](interfaces/SchemaConfig.md)
- [SchemaConfigEntity](interfaces/SchemaConfigEntity.md)
- [SchemaData](interfaces/SchemaData.md)
- [SchemaDataEntity](interfaces/SchemaDataEntity.md)
- [SchemaDomain](interfaces/SchemaDomain.md)
- [SchemaService](interfaces/SchemaService.md)
- [Stage](interfaces/Stage.md)
- [StageService](interfaces/StageService.md)

### Type Aliases

- [ManyToOne](README.md#manytoone)
- [OneToMany](README.md#onetomany)
- [OneToOne](README.md#onetoone)

### Variables

- [orm](README.md#orm)

### Functions

- [abs](README.md#abs)
- [acos](README.md#acos)
- [addDay](README.md#addday)
- [addHours](README.md#addhours)
- [addMinutes](README.md#addminutes)
- [addMonth](README.md#addmonth)
- [addSeconds](README.md#addseconds)
- [addTime](README.md#addtime)
- [addYear](README.md#addyear)
- [as](README.md#as)
- [asc](README.md#asc)
- [asin](README.md#asin)
- [atan](README.md#atan)
- [atan2](README.md#atan2)
- [avg](README.md#avg)
- [between](README.md#between)
- [ceil](README.md#ceil)
- [chr](README.md#chr)
- [concat](README.md#concat)
- [cos](README.md#cos)
- [cosh](README.md#cosh)
- [count](README.md#count)
- [curTime](README.md#curtime)
- [date](README.md#date)
- [dateDiff](README.md#datediff)
- [dateTime](README.md#datetime)
- [day](README.md#day)
- [desc](README.md#desc)
- [distinct](README.md#distinct)
- [exp](README.md#exp)
- [first](README.md#first)
- [floor](README.md#floor)
- [hours](README.md#hours)
- [includes](README.md#includes)
- [isNotNull](README.md#isnotnull)
- [isNull](README.md#isnull)
- [last](README.md#last)
- [ln](README.md#ln)
- [log](README.md#log)
- [lower](README.md#lower)
- [lpad](README.md#lpad)
- [ltrim](README.md#ltrim)
- [max](README.md#max)
- [min](README.md#min)
- [minutes](README.md#minutes)
- [month](README.md#month)
- [now](README.md#now)
- [nvl](README.md#nvl)
- [nvl2](README.md#nvl2)
- [remainder](README.md#remainder)
- [replace](README.md#replace)
- [round](README.md#round)
- [rpad](README.md#rpad)
- [rtrim](README.md#rtrim)
- [seconds](README.md#seconds)
- [sign](README.md#sign)
- [sin](README.md#sin)
- [sinh](README.md#sinh)
- [source](README.md#source)
- [substr](README.md#substr)
- [substring](README.md#substring)
- [sum](README.md#sum)
- [tan](README.md#tan)
- [tanh](README.md#tanh)
- [time](README.md#time)
- [timeDiff](README.md#timediff)
- [toDate](README.md#todate)
- [toDateTime](README.md#todatetime)
- [toJson](README.md#tojson)
- [toNumber](README.md#tonumber)
- [toString](README.md#tostring)
- [toTime](README.md#totime)
- [today](README.md#today)
- [trim](README.md#trim)
- [trunc](README.md#trunc)
- [upper](README.md#upper)
- [user](README.md#user)
- [weekday](README.md#weekday)
- [year](README.md#year)

## Type Aliases

### ManyToOne

Ƭ **ManyToOne**<`T`\>: [`IRelation`](interfaces/IRelation.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[domain/queryable.ts:252](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L252)

___

### OneToMany

Ƭ **OneToMany**<`T`\>: [`IRelation`](interfaces/IRelation.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[domain/queryable.ts:250](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L250)

___

### OneToOne

Ƭ **OneToOne**<`T`\>: [`IRelation`](interfaces/IRelation.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[domain/queryable.ts:251](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L251)

## Variables

### orm

• `Const` **orm**: [`IOrm`](interfaces/IOrm.md) = `Orm.instance`

#### Defined in

[index.ts:5](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/index.ts#L5)

## Functions

### abs

▸ **abs**(`value`): `number`

Get the absolute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:269](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L269)

___

### acos

▸ **acos**(`value`): `number`

Get the arc cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:271](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L271)

___

### addDay

▸ **addDay**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:369](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L369)

___

### addHours

▸ **addHours**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:371](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L371)

___

### addMinutes

▸ **addMinutes**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:373](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L373)

___

### addMonth

▸ **addMonth**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:367](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L367)

___

### addSeconds

▸ **addSeconds**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:375](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L375)

___

### addTime

▸ **addTime**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:377](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L377)

___

### addYear

▸ **addYear**(`date`, `value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `value` | `number` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:365](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L365)

___

### as

▸ **as**(`value`, `name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `name` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:256](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L256)

___

### asc

▸ **asc**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[domain/queryable.ts:260](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L260)

___

### asin

▸ **asin**(`value`): `number`

Get the arc sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:273](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L273)

___

### atan

▸ **atan**(`value`): `number`

Get the arc tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:275](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L275)

___

### atan2

▸ **atan2**(`x`, `y`): `number`

Get the arc tangent of x and y

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:277](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L277)

___

### avg

▸ **avg**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:411](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L411)

___

### between

▸ **between**(`value`, `from`, `to`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `from` | `any` |
| `to` | `any` |

#### Returns

`boolean`

#### Defined in

[domain/queryable.ts:262](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L262)

___

### ceil

▸ **ceil**(`value`): `number`

Get the smallest following integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:279](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L279)

___

### chr

▸ **chr**(`value`): `string`

Get character from ASCII code

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:310](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L310)

___

### concat

▸ **concat**(`...values`): `string`

String concatenation

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | `string`[] |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:334](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L334)

___

### cos

▸ **cos**(`value`): `number`

Get the cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:281](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L281)

___

### cosh

▸ **cosh**(`value`): `number`

Get hyperbolic cosine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:283](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L283)

___

### count

▸ **count**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:413](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L413)

___

### curTime

▸ **curTime**(): `Date`

Get the current time

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:339](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L339)

___

### date

▸ **date**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:347](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L347)

___

### dateDiff

▸ **dateDiff**(`date`, `date2`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `date2` | `Date` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:379](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L379)

___

### dateTime

▸ **dateTime**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:349](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L349)

___

### day

▸ **day**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:355](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L355)

___

### desc

▸ **desc**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[domain/queryable.ts:258](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L258)

___

### distinct

▸ **distinct**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:266](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L266)

___

### exp

▸ **exp**(`value`): `number`

Raise e to the nth power

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:285](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L285)

___

### first

▸ **first**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:415](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L415)

___

### floor

▸ **floor**(`value`): `number`

Get the largest preceding integer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:287](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L287)

___

### hours

▸ **hours**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:359](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L359)

___

### includes

▸ **includes**(`value`, `list`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `list` | `any`[] |

#### Returns

`boolean`

#### Defined in

[domain/queryable.ts:264](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L264)

___

### isNotNull

▸ **isNotNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[domain/queryable.ts:408](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L408)

___

### isNull

▸ **isNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[domain/queryable.ts:406](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L406)

___

### last

▸ **last**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:417](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L417)

___

### ln

▸ **ln**(`value`): `number`

Get natural logarithm of num

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:289](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L289)

___

### log

▸ **log**(`num1`, `num2`): `number`

Get logarithm, base num1, of num2

#### Parameters

| Name | Type |
| :------ | :------ |
| `num1` | `number` |
| `num2` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:291](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L291)

___

### lower

▸ **lower**(`value`): `string`

Lowercase string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:314](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L314)

___

### lpad

▸ **lpad**(`value`, `len`, `pad`): `string`

Pad the left-side of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `len` | `number` |
| `pad` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:316](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L316)

___

### ltrim

▸ **ltrim**(`value`): `string`

Remove leading chars

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:318](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L318)

___

### max

▸ **max**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:419](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L419)

___

### min

▸ **min**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:421](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L421)

___

### minutes

▸ **minutes**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:361](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L361)

___

### month

▸ **month**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:353](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L353)

___

### now

▸ **now**(): `Date`

Get the current dateTime

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:343](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L343)

___

### nvl

▸ **nvl**(`value`, `_default`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `_default` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:402](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L402)

___

### nvl2

▸ **nvl2**(`value`, `a`, `b`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `a` | `any` |
| `b` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:404](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L404)

___

### remainder

▸ **remainder**(`n1`, `n2`): `number`

Get remainder

#### Parameters

| Name | Type |
| :------ | :------ |
| `n1` | `number` |
| `n2` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:293](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L293)

___

### replace

▸ **replace**(`value`, `source`, `target`): `string`

The replace() method searches a string for a specified value and returns a new string where the specified values are replaced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `source` | `string` |
| `target` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:320](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L320)

___

### round

▸ **round**(`value`, `decimals`): `number`

Get rounded value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `decimals` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:295](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L295)

___

### rpad

▸ **rpad**(`value`, `len`, `pad`): `string`

Pad the right-side of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `len` | `number` |
| `pad` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:322](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L322)

___

### rtrim

▸ **rtrim**(`value`): `string`

Remove trailing spaces

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:324](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L324)

___

### seconds

▸ **seconds**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:363](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L363)

___

### sign

▸ **sign**(`value`): `number`

Get sign of exp

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:297](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L297)

___

### sin

▸ **sin**(`value`): `number`

Get sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:299](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L299)

___

### sinh

▸ **sinh**(`value`): `number`

Get hyperbolic sine

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:301](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L301)

___

### source

▸ **source**(): `string`

#### Returns

`string`

#### Defined in

[domain/queryable.ts:399](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L399)

___

### substr

▸ **substr**(`value`, `from`, `count`): `string`

Get a substring of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `from` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:326](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L326)

___

### substring

▸ **substring**(`value`, `from`, `count`): `string`

Get a substring of string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `from` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:328](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L328)

___

### sum

▸ **sum**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:423](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L423)

___

### tan

▸ **tan**(`value`): `number`

Get tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:303](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L303)

___

### tanh

▸ **tanh**(`value`): `number`

Get hyperbolic tangent

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:305](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L305)

___

### time

▸ **time**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:345](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L345)

___

### timeDiff

▸ **timeDiff**(`time`, `time2`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `Date` |
| `time2` | `Date` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:381](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L381)

___

### toDate

▸ **toDate**(`value`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:386](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L386)

___

### toDateTime

▸ **toDateTime**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:388](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L388)

___

### toJson

▸ **toJson**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

[domain/queryable.ts:392](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L392)

___

### toNumber

▸ **toNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:394](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L394)

___

### toString

▸ **toString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:384](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L384)

___

### toTime

▸ **toTime**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:390](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L390)

___

### today

▸ **today**(): `Date`

Get the current date

#### Returns

`Date`

#### Defined in

[domain/queryable.ts:341](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L341)

___

### trim

▸ **trim**(`value`): `string`

Remove characters

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:330](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L330)

___

### trunc

▸ **trunc**(`value`, `decimals`): `number`

Truncate num

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `decimals` | `number` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:307](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L307)

___

### upper

▸ **upper**(`value`): `string`

Uppercase string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[domain/queryable.ts:332](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L332)

___

### user

▸ **user**(): `string`

#### Returns

`string`

#### Defined in

[domain/queryable.ts:397](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L397)

___

### weekday

▸ **weekday**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:357](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L357)

___

### year

▸ **year**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`number`

#### Defined in

[domain/queryable.ts:351](https://github.com/FlavioLionelRita/lambdaorm-client-node/blob/accb0c4/src/lib/domain/queryable.ts#L351)
