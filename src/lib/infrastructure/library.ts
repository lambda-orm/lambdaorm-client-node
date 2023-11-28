import { Expressions } from '3xpr'
const CryptoJS = require('crypto-js')

export class SentenceLibrary {
	// eslint-disable-next-line no-useless-constructor
	public constructor (private readonly expressions:Expressions) {}

	public load ():void {
		this.functions()
	}

	private functions (): void {
		this.expressions.addFunction('toBase64(value:string):string', (value: string):string => CryptoJS.enc.Base64.parse(value))
		this.expressions.addFunction('getBase64(value:string):string', (value: string): string => CryptoJS.enc.Base64.stringify(value))
		this.expressions.addFunction('encrypt(value:string):string', (value: string, key:string):string => CryptoJS.AES.encrypt(value, key).toString())
		this.expressions.addFunction('decrypt(value:string):string', (value: string, key:string):string => {
			const bytes = CryptoJS.AES.decrypt(value, key)
			return bytes.toString(CryptoJS.enc.Utf8)
		})
		this.expressions.addFunction('update(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('updateAll(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('deleteAll(list: any[]):any', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('having(list: T[], predicate: boolean):T[]', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('include(list: any[], predicate: any):any', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('desc(value:any):void', ():void => { throw new Error('NotImplemented') })
		this.expressions.addFunction('asc(value:any):void', ():void => { throw new Error('NotImplemented') })
	}
}
