"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../../lib");
function execute() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            lib_1.ormClient.init('http://localhost:9291');
            const query = 'PmIndividuals.filter(p=> p.gender == gender).include(p->p.party)';
            const data = { "gender": "F" };
            const result = yield lib_1.ormClient.execute(query, data, { stage: 'default' });
            console.log(JSON.stringify(result, null, 2));
            const sentence = yield lib_1.ormClient.sentence(query, { stage: 'default' });
            console.log(JSON.stringify(sentence, null, 2));
        }
        catch (error) {
            console.error(error);
        }
    });
}
execute();
//# sourceMappingURL=lab.js.map