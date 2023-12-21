import { SchemaConfig } from 'lambdaorm-base'
export interface StageService {
	exists (stage:string): Promise<boolean>
	export (stage:string): Promise<SchemaConfig>
	import (stage:string, data:SchemaConfig): Promise<void>
}
