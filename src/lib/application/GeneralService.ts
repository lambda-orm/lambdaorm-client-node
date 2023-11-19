import { Health, Ping } from '../domain'

export interface GeneralService {
	ping ():Promise<Ping>
	health ():Promise<Health>
	metrics ():Promise<any>
}
