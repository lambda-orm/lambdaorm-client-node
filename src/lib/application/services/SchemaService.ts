import { Entity, EntityMapping, Enum, Mapping, Stage, Schema, DomainSchema } from 'lambdaorm-base'
export interface ClientSchemaService {
	version ():Promise<{version:string}>
	schema (): Promise<Schema>
	domain (): Promise<DomainSchema>
	sources ():Promise<{name:string, dialect:string}[]>
	source (source:string):Promise<{name:string, dialect:string}>
	entities (): Promise<Entity[]>
	entity (entity:string): Promise<Entity|undefined>
	enums (): Promise<Enum[]>
	enum (_enum:string): Promise<Enum|undefined>
	mappings (): Promise<Mapping[]>
	mapping (mapping:string): Promise<Mapping|undefined>
	entityMapping (mapping:string, entity:string): Promise<EntityMapping|undefined>
	stages (): Promise<Stage[]>
	stage (stage:string): Promise<Stage|undefined>
	views (): Promise<string[]>
}
