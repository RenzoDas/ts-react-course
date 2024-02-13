"use strict";
////////////////////////////////////////////////////////////
// ESERCIZIO 2: Interfacce
////////////////////////////////////////////////////////////
function getUserDescription(user) {
    var _a, _b, _c;
    const indirizzo = (_a = user.indirizzo) === null || _a === void 0 ? void 0 : _a.via;
    const hobby = user.hobby || [""]; //Esempio di cambiamento di tipo
    return `L'utente si chiama ${user.nome}, ha ${user.eta} anni, la sua mail è ${user.email}}, ${(_c = (_b = user.hobby) === null || _b === void 0 ? void 0 : _b.join(" ")) !== null && _c !== void 0 ? _c : "Non ha hobby"}`;
}
// let miaRicerca: Ricerca
// miaRicerca = function (src: string, sub: string): boolean {
//   return src.search(sub) > -1
// }
const miaRicerca = (src, sub) => {
    return src.search(sub) > -1;
};
miaRicerca("Ciao come stai", "come");
class Persona {
    constructor(nome, età) {
        this.nome = nome;
        this.età = età;
        this.cognome = "Mormile";
    }
    saluta() {
        return `Ciao, il mio nome è ${this.nome}`;
    }
}
// let persona = new Persona("Alice", 30);
// console.log(persona.saluta());
// class Studente extends Persona {
//   corso: string;
//   constructor(nome: string, età: number, corso: string) {
//     super(nome, età);
//     this.corso = corso;
//   }
//   salutaStudente() {
//     return `${this.saluta()} e studio ${this.corso}`;
//   }
// }
// let studente = new Studente("Bob", 20, "Informatica");
// console.log(studente.salutaStudente());
