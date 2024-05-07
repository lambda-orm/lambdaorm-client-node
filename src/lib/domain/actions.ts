import { QueryPlan, MetadataParameter, MetadataModel, MetadataConstraint, Metadata, QueryActions } from 'lambdaorm-base'
import { IOrm } from '../application/IOrm'

export class QueryActionsImpl implements QueryActions {
	private orm
	private name
	private stage
	constructor (name: string, orm:IOrm, stage?:string) {
		this.name = name
		this.stage = stage
		this.orm = orm
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	normalize (query: string): string {
		// TODO: implement normalize
		throw new Error('Method not implemented.')
	}

	public async model (query: string): Promise<MetadataModel[]> {
		return await this.orm.model(`${this.name}${query}`)
	}

	public async parameters (query: string): Promise<MetadataParameter[]> {
		return await this.orm.parameters(`${this.name}${query}`)
	}

	public async constraints (query: string): Promise<MetadataConstraint> {
		return await this.orm.constraints(`${this.name}${query}`)
	}

	public async metadata (query: string): Promise<Metadata> {
		return await this.orm.metadata(`${this.name}${query}`)
	}

	public async plan (query: string): Promise<QueryPlan> {
		return await this.orm.plan(`${this.name}${query}`, { stage: this.stage })
	}

	public async execute (query: string, data:any): Promise<any> {
		return await this.orm.execute(`${this.name}${query}`, data, { stage: this.stage })
	}

	public async executeQueued (query: string, topic:string, data:any, chunk?:number): Promise<any> {
		return await this.orm.executeQueued(`${this.name}${query}`, topic, data, chunk, { stage: this.stage })
	}
}
