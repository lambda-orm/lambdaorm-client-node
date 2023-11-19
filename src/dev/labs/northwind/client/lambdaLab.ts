import { orm } from '../../../../lib'
import { Orders } from './model'

async function execute () {
	try {	
		orm.init('http://localhost:9291')
		const query = (id:number)=> Orders.filter(p =>p.id==id)
																			.include(p=>[p.customer.map(p=>p.name),p.details
																				.include(p=>p.product
																					.include(p=>p.category.map(p=>p.name))
																				.map(p=>p.name))
																			.map(p=>[p.quantity,p.unitPrice])])
		const data = {id: 10248 }
		const sentence = await orm.sentence(query, { stage: 'default'})
		console.log(JSON.stringify(sentence,null,2))
		const result = await orm.execute(query, data,{ stage: 'default'})
		console.log(JSON.stringify(result,null,2))		
	} catch (error: any) {
		console.error(error)
	}
}
execute()
