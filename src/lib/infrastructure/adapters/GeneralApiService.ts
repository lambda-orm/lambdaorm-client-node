import { GeneralService } from '../../application/services'
import { GeneralApi } from '../api'
import { AxiosResponse } from 'axios'
import { Health, Ping } from '../../domain'

export class GeneralApiService implements GeneralService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly generalApi:GeneralApi) {}

	public async version ():Promise<{version:string}> {
		const result:AxiosResponse<any, any> = await this.generalApi.ping()
		return result.data
	}

	public async ping ():Promise<Ping> {
		const result:AxiosResponse<any, any> = await this.generalApi.ping()
		return result.data
	}

	public async health ():Promise<Health> {
		const result:AxiosResponse<any, any> = await this.generalApi.health()
		return result.data
	}

	public async metrics ():Promise<any> {
		const result:AxiosResponse<any, any> = await this.generalApi.metrics()
		return result.data
	}
}
