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

node_modules/lambdaorm-base/schema/domain/schema.d.ts:181

___

### domain

• **domain**: [`DomainSchema`](DomainSchema.md)

#### Inherited from

[Schema](Schema.md).[domain](Schema.md#domain)

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:179

___

### infrastructure

• **infrastructure**: [`ClientServiceInfrastructureSchema`](ClientServiceInfrastructureSchema.md)

#### Overrides

[Schema](Schema.md).[infrastructure](Schema.md#infrastructure)

#### Defined in

[src/lib/domain/schema.ts:12](https://github.com/lambda-orm/lambdaorm-client-node/blob/af7af1fc556cf5613695df5bc65de430b994ea9e/src/lib/domain/schema.ts#L12)

___

### version

• **version**: `string`

#### Inherited from

[Schema](Schema.md).[version](Schema.md#version)

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:178
