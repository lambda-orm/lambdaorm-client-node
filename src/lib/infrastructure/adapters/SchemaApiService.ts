import { Entity, EntityMapping, Enum, Mapping, Schema, DomainSchema, Stage } from 'lambdaorm-base'
import { SchemaService } from '../../application/services/SchemaService'
import { SchemaApi } from '../api'
import { AxiosResponse } from 'axios'

export class SchemaApiService implements SchemaService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly schemaApi:SchemaApi) {}

	public async version (): Promise<{version:string}> {
		const result:AxiosResponse<{version:string}, any> = await this.schemaApi.version()
		return result.data
	}

	public async schema (): Promise<Schema> {
		const result:AxiosResponse<Schema, any> = await this.schemaApi.schema()
		return result.data
	}

	public async domain (): Promise<DomainSchema> {
		const result:AxiosResponse<DomainSchema, any> = await this.schemaApi.domain()
		return result.data
	}

	public async entities (): Promise<Entity[]> {
		const result:AxiosResponse<Entity[], any> = await this.schemaApi.entities()
		return result.data
	}

	public async entity (entity:string): Promise<Entity|undefined> {
		const result:AxiosResponse<Entity, any> = await this.schemaApi.entity(entity)
		return result.data
	}

	public async enums (): Promise<Enum[]> {
		const result:AxiosResponse<Enum[], any> = await this.schemaApi.enums()
		return result.data
	}

	public async enum (_enum:string): Promise<Enum|undefined> {
		const result:AxiosResponse<Enum, any> = await this.schemaApi._enum(_enum)
		return result.data
	}

	public async mappings (): Promise<Mapping[]> {
		const result:AxiosResponse<Mapping[], any> = await this.schemaApi.mappings()
		return result.data
	}

	public async mapping (mapping:string): Promise<Mapping|undefined> {
		const result:AxiosResponse<Mapping, any> = await this.schemaApi.mapping(mapping)
		return result.data
	}

	public async entityMapping (mapping:string, entity:string): Promise<EntityMapping|undefined> {
		const result:AxiosResponse<EntityMapping, any> = await this.schemaApi.entityMapping(mapping, entity)
		return result.data
	}

	public async sources ():Promise<{name:string, dialect:string}[]> {
		const result:AxiosResponse<{name:string, dialect:string}[], any> = await this.schemaApi.sources()
		return result.data
	}

	public async source (source:string):Promise<{name:string, dialect:string}> {
		const result:AxiosResponse<{name:string, dialect:string}, any> = await this.schemaApi.source(source)
		return result.data
	}

	public async stages (): Promise<Stage[]> {
		const result:AxiosResponse<Stage[], any> = await this.schemaApi.stages()
		return result.data
	}

	public async stage (stage:string): Promise<Stage|undefined> {
		const result:AxiosResponse<Stage, any> = await this.schemaApi.stage(stage)
		return result.data
	}

	public async views (): Promise<string[]> {
		const result:AxiosResponse<string[], any> = await this.schemaApi.views()
		return result.data
	}
}
