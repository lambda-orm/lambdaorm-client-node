import { Health, Ping } from '../../domain'

export interface ClientGeneralService {
	version ():Promise<{version:string}>
	ping ():Promise<Ping>
	health ():Promise<Health>
	metrics ():Promise<any>
}
