/*
 * ESERCIZI PRATICI - Fondamenti di JavaScript
 * --------------------------------------------------------
 * Questo documento contiene esercizi pratici per comprendere
 * i fondamenti di JavaScript.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 1: Tipi di Dati
////////////////////////////////////////////////////////////

// Stringhe: Rappresentano testo.

let nome = "G"
const nome1 = "Giuseppe"
const nome2 = `Giuseppe ${nome}`

console.log(nome.toUpperCase())

// Numeri: Includono sia interi che float.
// const numero = 2
// const numeroFloat = 2.5

// Booleani: Valori veri o falsi.

const vero = true
// Oggetti: Collezioni di proprietà.

const Persona = {
  name: "Giuseppe",
  age: 20,
}

const citta = {
  name: "Rossano",
  cap: 87064,
}

const Persona2 = { ...Persona, citta: { ...citta, regione: "Calabria" } }

const { city, ...ciao } = Persona2

console.log(ciao)
// Arrays: Liste ordinate di elementi.

const array = ["Renzo", "Giuseppe"]

const array2 = new Array(5, "ciao", "ciao", "ciao")

console.log(array2)
array.push("G")
console.log(array)

const [renzo, ...rest] = array

// Undefined e Null: Rappresentano l'assenza di un valore.
let pipòo
let gioco = null

console.log(pipòo)
/**
 * NOTA:
 * 1) ES6 - Destructuring:
 *    - Il destructuring permette di assegnare le proprietà di un oggetto o array a variabili separate.
 *    - Esempio: let { chiave } = oggetto;
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 2: Dichiarazioni di Variabili
////////////////////////////////////////////////////////////

// Let: Usato per dichiarare variabili con scope di blocco.

// Const: Usato per dichiarare costanti con scope di blocco.

// Var: Usato in passato per dichiarare variabili con scope funzionale.

/*
 * NOTA:
 * 1) Perché non si usa più 'var'?
 *    - 'var' ha uno scope funzionale e può causare problemi di visibilità e sovrascrittura.
 *    - 'let' e 'const' hanno uno scope di blocco, offrendo una gestione più precisa e sicura.
 *
 * BEST PRACTICES:
 * 1) Non usare MAI var per dichiare una variabile
 * 2) Dichiarare sempre le variabili facendo uso di const e solo se tornera neccesario
 * riassegnare il valore cambiare la dichiarazzione a let.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Operatori
////////////////////////////////////////////////////////////

// Aritmetici: (+, -, *, /, %)

const numero = 9
const numero1 = 4

const sum = (/** @type {string} */ first, /** @type {number} */ second) => {
  console.log(first % second)
}

sum()
const numeroDivisibile = (a, b) => {
  console.log(a % b === 0)
}

numeroDivisibile(numero, numero1)

let cosa

cosa = 30

cosa -= 4

console.log(cosa)

// Di Assegnazione: (=, +=, -=, *=, /=)
// Di Confronto: (==, ===, !=, !==)
// Logici: (&&, ||, !, ??)

let test = null ?? "Ciao"

console.log(test)

/**
 * NOTE:
 * 1) Truthy e Falsy:
 *    - Valori che vengono interpretati come true o false.
 *    - 0, '', undefined, null, NaN sono falsy.
 *
 * 2) Differenza tra == e ===:
 *    - '==' confronta i valori dopo averli convertiti nello stesso tipo.
 *    - '===' confronta sia i valori che i tipi, senza conversioni.
 */
