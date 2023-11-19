import { Entity, EntityMapping, Enum, Mapping, Stage } from '../domain'
export interface SchemaService {
	dataSources ():Promise<{name:string, dialect:string}[]>
	entities (): Promise<Entity[]>
	entity (entity:string): Promise<Entity|undefined>
	enums (): Promise<Enum[]>
	enum (_enum:string): Promise<Enum|undefined>
	mappings (): Promise<Mapping[]>
	mapping (mapping:string): Promise<Mapping|undefined>
	entityMapping (mapping:string, entity:string): Promise<EntityMapping|undefined>
	stages (): Promise<Stage[]>
	stage (stage:string): Promise<Stage|undefined>
}
