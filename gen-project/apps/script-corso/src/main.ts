////////////////////////////////////////////////////////////
// ESERCIZIO 2: Interfacce
////////////////////////////////////////////////////////////

/**
Crea un'interfaccia per un oggetto "Utente" e utilizzala in diverse funzioni.
Dettagli:

Definisci un'interfaccia 'Utente' con proprietà come nome, età e email.
Scrivi una funzione che accetta un 'Utente' e stampa una breve descrizione.
Implementa una funzione per cambiare l'età di un 'Utente' e un'altra per aggiungere un hobby all'utente.
Questo esercizio ti aiuterà a comprendere come definire e utilizzare interfacce in TypeScript per gestire strutture di dati complesse.
*/

interface Utente {
  nome: string;
  eta: number;
  email: string;
  hobby?: string[];
  indirizzo?: {
    via: string;
    city: string;
  };
}

function getUserDescription(user: Utente): string {
  const indirizzo = user.indirizzo?.via;
  const hobby: string[] | number[] = user.hobby || [""]; //Esempio di cambiamento di tipo

  return `L'utente si chiama ${user.nome}, ha ${user.eta} anni, la sua mail è ${
    user.email
  }}, ${user.hobby?.join(" ") ?? "Non ha hobby"}`;
}

interface Ricerca {
  (sorgente: string, sottostringa: string): boolean;
}

// let miaRicerca: Ricerca
// miaRicerca = function (src: string, sub: string): boolean {
//   return src.search(sub) > -1
// }

const miaRicerca: Ricerca = (src: string, sub: string) => {
  return src.search(sub) > -1;
};

miaRicerca("Ciao come stai", "come");

interface StringArray {
  [index: number]: string;
}

class Persona {
  protected nome: string;
  private età: number;
  readonly cognome: string;

  constructor(nome: string, età: number) {
    this.nome = nome;
    this.età = età;
    this.cognome = "Mormile";
  }

  private saluta() {
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
