import { InfrastructureSchema, Schema } from 'lambdaorm-base'

export interface ClientServiceConfig {
	url: string
}

export interface ClientServiceInfrastructureSchema extends InfrastructureSchema {
	service: ClientServiceConfig
}

export interface ClientSchema extends Schema {
	infrastructure: ClientServiceInfrastructureSchema
}
