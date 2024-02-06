////////////////////////////////////////////////////////////
// ESERCIZIO 1: Tipi di Base
////////////////////////////////////////////////////////////

/**
Implementa diverse funzioni che dimostrano l'uso dei tipi di base in TypeScript.
Dettagli:

Crea una funzione che accetta un array di numeri e restituisce la somma.
Scrivi una funzione che unisce due stringhe con uno spazio tra di esse.
Realizza una funzione che accetta un valore booleano e stampa un messaggio diverso a seconda del valore.
Questo esercizio mira a consolidare la tua comprensione dei tipi di base in TypeScript, come stringhe, numeri e booleani.
*/

const sumArray = (array: number[]): number => {
  return array.reduce((acc, curr) => acc + curr)
}

const unionString = (a: string, b: string): string => {
  return `${a} ${b}`
}

const booleanFunction = (bool: boolean): void => {
  console.log(bool ? "Vero" : "Falso")
}

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
  nome: string
  eta: number
  email: string
  hobby?: string[]
}

function Descrizione(utente: Utente): void {
  console.log(
    `Ciao sono ${utente.nome}, ho ${utente.eta} e la mia e-mail è ${utente.email}`
  )
}

function cambiaEta(utente: Utente, newEta: number): void {
  utente.eta = newEta
}

function aggiungiHobby(utente: Utente): void {
  utente.hobby = ["Calcio", "Cucina", "Mantenuto"]
}

const user: Utente = {
  nome: "Giovanni",
  eta: 20,
  email: "giovanni@gmail.com",
  hobby: ["Basket", "Mangiare"],
}

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Classi
////////////////////////////////////////////////////////////

/**
Crea una classe 'Animale' con sottoclassi specifiche per diversi animali.
Dettagli:

Definisci una classe base 'Animale' con proprietà e metodi comuni.
Estendi questa classe con sottoclassi specifiche come 'Cane' e 'Gatto', ognuna con comportamenti unici.
Crea istanze di queste sottoclassi e dimostra il loro utilizzo.
Questo esercizio enfatizza l'uso delle classi, dell'ereditarietà e dei modificatori di accesso in TypeScript.
*/

class Animale {
  private nome: string

  constructor(nome: string) {
    this.nome = nome
  }

  protected getNome(): string {
    return this.nome
  }
}

let mioAnimale = new Animale("Leone")
// console.log(mioAnimale.getNome()) // OK
// console.log(mioAnimale.nome); // Errore: 'nome' è privato.

class Gatto extends Animale {
  constructor(nome: string) {
    super(nome)
  }

  public getNome(): string {
    return this.getNome() + "GATTO"
  }
}

let mioGatto = new Gatto("Leone")

////////////////////////////////////////////////////////////
// ESERCIZIO 4: Funzioni
////////////////////////////////////////////////////////////

/**
Sviluppa diverse funzioni che utilizzano funzionalità avanzate come parametri opzionali e overload.
Dettagli:

Crea una funzione che ha un parametro opzionale e mostra comportamenti diversi se il parametro è fornito o meno.
Implementa l'overload di una funzione che può accettare diversi tipi di parametri e comportarsi di conseguenza.
Questo esercizio è progettato per approfondire la tua comprensione delle funzioni avanzate in TypeScript.
*/

function optionalParameters(name: string, cognome: string = "Mistero"): string {
  return `Ciao ${name} ${cognome}`
}

function getEmail(name: string): string
function getEmail(userId: number): string
function getEmail(x: string | number): string {
  if (typeof x === "string") {
    return `String: ${x}`
  } else {
    return `Numero: ${x}`
  }
}

////////////////////////////////////////////////////////////
// ESERCIZIO 5: Generics
////////////////////////////////////////////////////////////

/**
Implementa una funzione generica e una classe generica.
Dettagli:

Scrivi una funzione generica che possa invertire un array di qualsiasi tipo.
Crea una classe generica 'CassettaDegliAttrezzi' che può contenere oggetti di qualsiasi tipo, ma solo di un tipo per istanza.
Questo esercizio ti permetterà di esplorare la potenza e la flessibilità dei Generics in TypeScript.
*/

function invertArray<T>(array: T[]): T[] {
  return array.reverse()
}

function CassettaDegliAttrezzi<T>() {
  let contenuto: T[] = []

  return {
    aggiungi(oggetto: T) {
      contenuto.push(oggetto)
    },
    rimuovi(oggetto: T) {
      contenuto.pop()
    },
  }
}
////////////////////////////////////////////////////////////
// ESERCIZIO 6: Tipi Union e Intersection
////////////////////////////////////////////////////////////

/**
Crea funzioni che usano tipi union e intersection.
Dettagli:

Definisci un tipo union per rappresentare diversi tipi di input.
Utilizza un tipo intersection per combinare più interfacce in un unico tipo.
L'obiettivo è mostrare come i tipi union e intersection possano essere utilizzati per creare tipi più flessibili e potenti.
*/

interface Persona {
  nome: string
  eta: number
}

interface Lavoratore {
  azienda: string
  salario: number
}

type PersonaLavoratore = Persona & Lavoratore

function StampaTutto(personaLavoratore: PersonaLavoratore) {
  console.log(
    `Nome: ${personaLavoratore.nome}, età : ${personaLavoratore.eta}, lavora a ${personaLavoratore.azienda} e prende ${personaLavoratore.salario}`
  )
}

////////////////////////////////////////////////////////////
// ESERCIZIO 7: Tipi Literal e Type Aliases
////////////////////////////////////////////////////////////

/**
Usa tipi literal e type aliases per creare funzioni più specifiche.
Dettagli:

Definisci un tipo alias per rappresentare un insieme di valori specifici come stati di un'applicazione.
Crea funzioni che utilizzano questi type aliases per dimostrarne l'utilità pratica.
Questo esercizio serve a capire come i tipi literal e i type aliases possano essere utilizzati per creare codice più leggibile e manutenibile.
*/

type Applicazione = "attiva" | "inattiva" | "errore"

function Stampa(status: Applicazione) {
  switch (status) {
    case "attiva":
      console.log("Applicazione attiva.")
      break
    case "inattiva":
      console.log("Applicazione inattiva.")
      break
    case "errore":
      console.log("Applicazione errore.")
      break
    default:
      console.log("Sconosciuto")
  }
}
////////////////////////////////////////////////////////////
// ESERCIZIO 8: Type Assertions
////////////////////////////////////////////////////////////

/**
Utilizza le type assertions in diversi scenari per manipolare i tipi.
Dettagli:

Scrivi una funzione che accetta un tipo 'any' e lo converte in un tipo più specifico utilizzando type assertions.
Dimostra l'uso errato delle type assertions per evidenziare la loro corretta applicazione.
Questo esercizio è mirato a mostrare l'importanza e l'uso appropriato delle type assertions in TypeScript.
*/

function manipolaStrings(input: any): void {
  const stringa: string = input as string
  const operazioneStringa = stringa.toLowerCase()

  console.log(operazioneStringa)
}

function manipolaNumero(input: any): void {
  const numero: number = input as number
  const operazioneNumero = numero.toExponential()

  console.log(operazioneNumero)
}

manipolaStrings("Giuseppe")
manipolaNumero(30)

////////////////////////////////////////////////////////////
// ESERCIZIO 9: Controllo del Flusso e Tipizzazione Avanzata
////////////////////////////////////////////////////////////

/**
Crea funzioni che utilizzano guardie di tipo e tipi avanzati.
Dettagli:

Implementa una guardia di tipo per differenziare tra diversi tipi di oggetti.
Usa tipi avanzati come tipi condizionali o mappati in scenari pratici.
Questo esercizio ti aiuterà a comprendere come gestire scenari complessi e tipi dinamici in TypeScript.
*/

function processaDati(dato: any): number | string {
  if (typeof dato === "number") {
    return dato * dato
  } else if (Array.isArray(dato)) {
    return dato.reduce((acc, curr) => acc + curr)
  } else {
    return "Questo tipo di dato non è gestito"
  }
}

console.log(processaDati([3, "ciao"]))

////////////////////////////////////////////////////////////
// ESERCIZIO 9.1: Tipi Discriminati
////////////////////////////////////////////////////////////

/**

Supponiamo di avere un'interfaccia Prodotto che rappresenta un prodotto con due campi: tipo e prezzo. 
Il campo tipo discrimina tra i tipi di prodotto. 
Implementare una funzione chiamata calcolaSconto che prende un prodotto come argomento e restituisce il prezzo 
con uno sconto del 10% se il tipo del prodotto è "scontato". Altrimenti, restituire il prezzo senza sconto.
*/

interface Prodotto {
  tipo: "Elettronica" | "Abbigliamento" | "Scontato"
  prezzo: number
  getPrice: () => number
}

function calcolaSconto(prodotto: Prodotto): number {
  if (prodotto.tipo === "Scontato") {
    return prodotto.prezzo - prodotto.prezzo * 0.1
  } else {
    return prodotto.prezzo
  }
}

function makeProduct(
  tipo: Prodotto["tipo"],
  prezzo: Prodotto["prezzo"]
): Prodotto {
  return {
    tipo,
    prezzo,
    getPrice() {
      return calcolaSconto({ tipo, prezzo } as Prodotto)
    },
  }
}

console.log(makeProduct("Abbigliamento", 200).getPrice())
console.log(makeProduct("Elettronica", 1100))
console.log(makeProduct("Scontato", 420).getPrice())

////////////////////////////////////////////////////////////
// ESERCIZIO 9.2: Tipi Avanzati
////////////////////////////////////////////////////////////

/**

Supponiamo di avere un array di valori con diversi tipi di dati. 
Creare una funzione chiamata filtraStringhe che prende un array e restituisce un nuovo array contenente solo le stringhe dall'array
originale.
*/

function filtraStringhe(array: any[]): string[] {
  return array.filter((x) => typeof x === "string")
}

console.log(filtraStringhe(["ciao", "papera", 5]))
////////////////////////////////////////////////////////////
// ESERCIZIO 10: Esplorazione delle Opzioni di Compilazione
////////////////////////////////////////////////////////////

/**
Esamina e modifica il comportamento del compilatore TypeScript in questo progetto.
Dettagli:

In questo progetto si include un file tsconfig.json nella root del progetto.
Il tuo compito è esaminare il file tsconfig.json e comprendere le diverse opzioni di configurazione impostate.
Modifica alcune delle impostazioni in tsconfig.json, come strict o noImplicitAny, e osserva come queste modifiche influenzano il comportamento del compilatore con il codice in questo file (02_Typescript/01_Basic_Typescript/practice.ts)
Aggiungi commenti in questo file spiegando come le modifiche apportate a tsconfig.json influenzano specifici aspetti del codice.
Questo esercizio ti darà l'opportunità di interagire con un ambiente TypeScript già configurato, permettendoti di concentrarti sulla comprensione e sull'adattamento delle impostazioni del compilatore per ottenere diversi comportamenti di compilazione.

Nota: Assicurati di eseguire test e osservazioni su diversi aspetti del codice in practice.ts per vedere come le varie opzioni influenzano la tipizzazione, il controllo degli errori e altre caratteristiche del compilatore TypeScript.
*/

////////////////////////////////////////////////////////////
