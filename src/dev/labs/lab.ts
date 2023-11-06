import { ormClient } from '../../lib'

async function execute () {
	try {	
		ormClient.init('http://localhost:9291')
		const query = 'PmIndividuals.filter(p=> p.gender == gender).include(p->p.party)'
		const data = { "gender": "F" }
		const result = await ormClient.execute(query, data,{ stage: 'default'})
		console.log(JSON.stringify(result,null,2))
		const sentence = await ormClient.sentence(query, { stage: 'default'})
		console.log(JSON.stringify(sentence,null,2))
	} catch (error: any) {
		console.error(error)
	}
}
execute()
