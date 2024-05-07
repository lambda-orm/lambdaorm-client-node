import { Expressions } from '3xpr'
const CryptoJS = require('crypto-js')

export class SentenceLibrary {
	// eslint-disable-next-line no-useless-constructor
	public constructor (private readonly exp:Expressions) {}

	public load ():void {
		this.functions()
	}

	private functions (): void {
		this.exp.addFunction('toBase64(value:string):string', (value: string):string => CryptoJS.enc.Base64.parse(value), { description: 'Convert to base 64' })
		this.exp.addFunction('getBase64(value:string):string', (value: string): string => CryptoJS.enc.Base64.stringify(value), { description: 'Get base 64' })
		this.exp.addFunction('encrypt(value:string):string', (value: string, key:string):string => CryptoJS.AES.encrypt(value, key).toString(), { description: 'Encrypt' })
		this.exp.addFunction('decrypt(value:string):string', (value: string, key:string):string => {
			const bytes = CryptoJS.AES.decrypt(value, key)
			return bytes.toString(CryptoJS.enc.Utf8)
		}, { description: 'Decrypt' })
		this.exp.addFunction('update(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') }, { description: 'Update' })
		this.exp.addFunction('updateAll(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') }, { description: 'Update all' })
		this.exp.addFunction('deleteAll(list: any[]):any', ():void => { throw new Error('NotImplemented') }, { description: 'Delete all' })
		this.exp.addFunction('having(list: T[], predicate: boolean):T[]', ():void => { throw new Error('NotImplemented') }, { description: 'Having' })
		this.exp.addFunction('include(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') }, { description: 'Include' })
		this.exp.addFunction('desc(value:any):void', ():void => { throw new Error('NotImplemented') }, { description: 'Desc' })
		this.exp.addFunction('asc(value:any):void', ():void => { throw new Error('NotImplemented') }, { description: 'Asc' })
	}
}
