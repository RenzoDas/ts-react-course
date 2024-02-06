////////////////////////////////////////////////////////////////////////////////
// SCOPE: Globale, Locale (Funzionale), Blocco, Scope Chain, Shadowing, Closures
////////////////////////////////////////////////////////////////////////////////

const globale = "sono globale"

function test() {
  const funzionale = "sono funzionale"
  const interna = () => `Sto leggendo ${funzionale}`
  return interna
}

const esterna = test()

console.log(esterna())

///////////////////////////////////////////////////////////////
// FUNCTIONS: Factory, Constructor, Arrow, High Order Functions
///////////////////////////////////////////////////////////////

// FACTORY
function persona(nome, cognome, eta) {
  return {
    nome,
    cognome,
    eta,
    saluta() {
      return `Ciao sono, ${this.nome} ${this.cognome}`
    },
    info() {
      return `Nome: ${this.nome}, Cognome: ${this.cognome}, Eta: ${this.eta}`
    },
  }
}

// const giuseppe = persona("Giuseppe", "Russo", "20")
// const renzo = persona("Renzo", "Dastolfi", "31")

// renzo.info = () => "Non ce piu l'info"

// console.log(giuseppe.info())
// console.log(renzo.info())

// CONSTRUCTOR

function Persona(nome, cognome, eta) {
  this.nome = nome
  this.cognome = cognome
  this.eta = eta
  this.saluta = function () {
    return `Ciao sono, ${this.nome} ${this.cognome}`
  }
  this.info = function () {
    return `Nome: ${this.nome}, Cognome: ${this.cognome}, Eta: ${this.eta}`
  }
}

const giuseppe = new Persona("Giuseppe", "Russo", "20")
const renzo = new Persona("Renzo", "DAstolfi", "31")

console.log(giuseppe.saluta())
console.log(renzo.saluta())

///////////////////////////////////////////////////////////////
// ESERCIZI: Costruzione e Manipolazione di Oggetti e Funzioni
///////////////////////////////////////////////////////////////

/**
 * ESERCIZIO 1: Factory Function con Metodo Interno
 *
 * Crea una factory function 'createTimer' che accetta un tempo in secondi.
 * L'oggetto restituito deve avere:
 * - Una proprietà 'seconds' che tiene traccia del tempo.
 * - Un metodo 'start' che inizia un countdown stampando ogni secondo il tempo rimanente.
 * - Un metodo 'onComplete' che è una funzione di callback da eseguire quando il timer arriva a 0.
 * Usa setInterval per implementare il countdown.
 * Esempio di utilizzo:
 * let timer = createTimer(10);
 * timer.onComplete = () => console.log("Timer completato!");
 * timer.start();
 */

// Implementa qui la tua factory function

function createTimer(seconds) {
  return {
    seconds,
    start() {
      const timer = setInterval(() => {
        console.log(this.seconds)
        this.seconds--

        if (this.seconds === -1) {
          clearInterval(timer)
          this.onComplete()
        }
      }, 1000)
    },
    onComplete: () => console.log("Timer Finito"),
  }
}

const timer = createTimer(10)

console.log(timer)

// timer.start()

/**
 * ESERCIZIO 2: Constructor Function Avanzata
 *
 * Crea una constructor function chiamata 'Book' che accetta titolo, autore e anno di pubblicazione.
 * Aggiungi due metodi:
 * - 'getSummary' che restituisce una stringa con il riassunto del libro.
 * - 'getYearsSincePublication' che calcola quanti anni sono passati dalla pubblicazione del libro fino all'anno corrente.
 * Esempio di utilizzo:
 * let book1 = new Book("Il Signore degli Anelli", "J.R.R. Tolkien", 1954);
 * console.log(book1.getSummary()); // Stampa: "Il Signore degli Anelli scritto da J.R.R. Tolkien, pubblicato nel 1954"
 * console.log(book1.getYearsSincePublication()); // Stampa il numero di anni passati dalla pubblicazione
 */

// Implementazione della constructor function 'Book'

function Book(title, author, yearOfPublication) {
  this.title = title
  this.author = author
  this.yearOfPublication = yearOfPublication
  this.getSummary = function () {
    return `${this.title} scritto da ${this.author}, pubblicato nel ${this.yearOfPublication}`
  }
  this.getYearsSincePublication = function () {
    const currentYear = new Date().getFullYear()
    return currentYear - this.yearOfPublication
  }
}

const riassuntoLibro = new Book(
  "Il Signore degli Anelli",
  "J.R.R. Tolkien",
  "1954"
)

console.log(riassuntoLibro.getSummary())
console.log(riassuntoLibro.getYearsSincePublication())
/**
 * ESERCIZIO 3: Arrow Functions e Array Methods
 *
 * Utilizza una arrow function per creare una funzione 'findLargestNumber' che accetta un array di numeri
 * e restituisce il numero più grande usando il metodo 'reduce'.
 * Esempio di utilizzo:
 * let maxNumber = findLargestNumber([10, 20, 30]);
 * console.log(maxNumber); // Stampa: 30
 */

// Implementa qui la tua arrow function

const findLargestNumber = (array) => {
  return array.reduce(
    (max, currentValue) => (currentValue > max ? currentValue : max),
    array[0]
  )
}

const maxNumber = findLargestNumber([-10, -20, -30])

console.log(maxNumber)

/**
 * ESERCIZIO 4: High Order Function con Funzioni di Array
 *
 * Crea una high order function 'applyToArray' che accetta una funzione come parametro.
 * La high order function deve restituire una nuova funzione che accetta un array e applica la funzione data
 * ad ogni elemento dell'array, restituendo un nuovo array.
 * Esempio di utilizzo:
 * let double = n => n * 2;
 * let doubleArray = applyToArray(double);
 * console.log(doubleArray([1, 2, 3])); // Stampa: [2, 4, 6]
 */

// Implementa qui la tua high order function

function applyToArray(callback) {
  return (array) => array.map(callback)
}

let double = (n) => n * 2
let triple = (n) => n * 3

let doubleArray = applyToArray(double)
let trileArray = applyToArray(triple)

console.log(trileArray([1, 2, 3, 4, 5]))
