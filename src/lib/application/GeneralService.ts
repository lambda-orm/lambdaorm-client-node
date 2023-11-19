export interface GeneralService {
	ping ():Promise<any>
	health ():Promise<any>
	metrics ():Promise<any>
}
