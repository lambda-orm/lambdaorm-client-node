import { GeneralService } from 'lib/application'
import { GeneralApi } from '../api'
import { AxiosResponse } from 'axios'

export class GeneralApiService implements GeneralService {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly generalApi:GeneralApi) {}

	public async ping ():Promise<any> {
		const result:AxiosResponse<any, any> = await this.generalApi.ping()
		return result.data
	}

	public async health ():Promise<any> {
		const result:AxiosResponse<any, any> = await this.generalApi.health()
		return result.data
	}

	public async metrics ():Promise<any> {
		const result:AxiosResponse<any, any> = await this.generalApi.metrics()
		return result.data
	}
}
