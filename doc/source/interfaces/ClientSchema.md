[Lambda ORM client](../README.md) / ClientSchema

# Interface: ClientSchema

## Hierarchy

- [`Schema`](Schema.md)

  ↳ **`ClientSchema`**

## Table of contents

### Properties

- [application](ClientSchema.md#application)
- [domain](ClientSchema.md#domain)
- [infrastructure](ClientSchema.md#infrastructure)
- [version](ClientSchema.md#version)

## Properties

### application

• `Optional` **application**: [`ApplicationSchema`](ApplicationSchema.md)

#### Inherited from

[Schema](Schema.md).[application](Schema.md#application)

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:182

___

### domain

• **domain**: [`DomainSchema`](DomainSchema.md)

#### Inherited from

[Schema](Schema.md).[domain](Schema.md#domain)

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:180

___

### infrastructure

• **infrastructure**: [`ClientServiceInfrastructureSchema`](ClientServiceInfrastructureSchema.md)

#### Overrides

[Schema](Schema.md).[infrastructure](Schema.md#infrastructure)

#### Defined in

[src/lib/domain/schema.ts:12](https://github.com/lambda-orm/lambdaorm-client-node/blob/529e5a44db104f23d202b29664d7b44f0a3728da/src/lib/domain/schema.ts#L12)

___

### version

• **version**: `string`

#### Inherited from

[Schema](Schema.md).[version](Schema.md#version)

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:179
