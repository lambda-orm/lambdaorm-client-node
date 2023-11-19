import { SchemaConfig } from '../domain'
export interface StageService {
	exists (stage:string): Promise<boolean>
	export (stage:string): Promise<SchemaConfig>
	import (stage:string, schemaData:any): Promise<void>
}
