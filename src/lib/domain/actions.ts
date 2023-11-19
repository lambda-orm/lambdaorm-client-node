import { MetadataSentence, MetadataParameter, MetadataModel, MetadataConstraint, Metadata } from './model'
import { IOrm } from '../application/ports/IOrm'

export class ExpressionActions {
	private orm
	private name
	private stage
	constructor (name: string, orm:IOrm, stage?:string) {
		this.name = name
		this.stage = stage
		this.orm = orm
	}

	public async model (expression: string): Promise<MetadataModel[]> {
		return await this.orm.model(`${this.name}${expression}`)
	}

	public async parameters (expression: string): Promise<MetadataParameter[]> {
		return await this.orm.parameters(`${this.name}${expression}`)
	}

	public async constraints (expression: string): Promise<MetadataConstraint> {
		return await this.orm.constraints(`${this.name}${expression}`)
	}

	public async metadata (expression: string): Promise<Metadata> {
		return await this.orm.metadata(`${this.name}${expression}`)
	}

	public async sentence (expression: string): Promise<MetadataSentence> {
		return await this.orm.sentence(`${this.name}${expression}`, { stage: this.stage })
	}

	public async execute (expression: string, data:any): Promise<any> {
		return await this.orm.execute(`${this.name}${expression}`, data, { stage: this.stage })
	}

	public async executeQueued (expression: string, topic:string, data:any, chunk?:number): Promise<any> {
		return await this.orm.executeQueued(`${this.name}${expression}`, topic, data, chunk, { stage: this.stage })
	}
}
