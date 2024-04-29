import { SchemaData } from 'lambdaorm-base'
export interface ClientStageService {
	exists (stage:string): Promise<boolean>
	export (stage:string): Promise<SchemaData>
	import (stage:string, data:SchemaData): Promise<void>
}
