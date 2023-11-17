import { ormClient } from '../../../../lib'

async function execute () {
	try {	
		ormClient.init('http://localhost:9291')
		const query = 'Orders.filter(p =>p.id==id).include(p=>[p.customer.map(p=>p.name),p.details.include(p=>p.product.include(p=>p.category.map(p=>p.name)).map(p=>p.name)).map(p=>[p.quantity,p.unitPrice])])'
		const data = {id: 10248 }
		const result = await ormClient.execute(query, data,{ stage: 'default'})
		console.log(JSON.stringify(result,null,2))
		const sentence = await ormClient.sentence(query, { stage: 'default'})
		console.log(JSON.stringify(sentence,null,2))
	} catch (error: any) {
		console.error(error)
	}
}
execute()
