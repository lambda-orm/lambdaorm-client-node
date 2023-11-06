"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentenceLibrary = void 0;
const CryptoJS = require('crypto-js');
class SentenceLibrary {
    // eslint-disable-next-line no-useless-constructor
    constructor(model) {
        this.model = model;
    }
    load() {
        this.functions();
    }
    functions() {
        this.model.addFunction('toBase64(value:string):string', (value) => CryptoJS.enc.Base64.parse(value));
        this.model.addFunction('getBase64(value:string):string', (value) => CryptoJS.enc.Base64.stringify(value));
        this.model.addFunction('encrypt(value:string):string', (value, key) => CryptoJS.AES.encrypt(value, key).toString());
        this.model.addFunction('decrypt(value:string):string', (value, key) => {
            const bytes = CryptoJS.AES.decrypt(value, key);
            return bytes.toString(CryptoJS.enc.Utf8);
        });
        this.model.addFunction('update(list: any[], predicate: any):any', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('updateAll(list: any[], predicate: any):any', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('deleteAll(list: any[]):any', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('having(list: T[], predicate: boolean):T[]', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('include(list: any[], predicate: any):any', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('desc(value:any):void', () => { throw new Error('NotImplemented'); });
        this.model.addFunction('asc(value:any):void', () => { throw new Error('NotImplemented'); });
    }
}
exports.SentenceLibrary = SentenceLibrary;
//# sourceMappingURL=library.js.map