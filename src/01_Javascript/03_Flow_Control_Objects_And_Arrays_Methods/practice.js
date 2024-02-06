/*
 * ESERCIZI PRATICI - Fondamenti di JavaScript
 * --------------------------------------------------------
 * Questo documento contiene esercizi pratici per comprendere
 * i fondamenti di JavaScript.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 1: Controllo del Flusso con If-Else
////////////////////////////////////////////////////////////

/**
 * Crea una funzione che accetta un numero come parametro.
 * Se il numero è divisibile per 3, stampa "Fizz".
 * Se è divisibile per 5, stampa "Buzz".
 * Se è divisibile sia per 3 che per 5, stampa "FizzBuzz".
 * Altrimenti, stampa il numero stesso.
 */

const FizzBuzz = (number) => {
  // Condizioni
  const isDivisibleBy3 = number % 3 === 0
  const isDivisibleBy5 = number % 5 === 0
  const isDivisibleBy3And5 = isDivisibleBy3 && isDivisibleBy5

  // Verifica
  if (isDivisibleBy3And5) {
    return "FizzBuzz"
  } else if (isDivisibleBy5) {
    return "Buzz"
  } else if (isDivisibleBy3) {
    return "Fizz"
  } else {
    return number
  }
}

console.log(FizzBuzz(9))

////////////////////////////////////////////////////////////
// ESERCIZIO 2: Utilizzo di Switch Case
////////////////////////////////////////////////////////////

/**
 * Scrivi una funzione che accetta un mese come stringa e restituisce
 * la stagione corrispondente (Primavera, Estate, Autunno, Inverno).
 * Usa uno switch case per gestire i vari casi.
 */

const getSeason = (month) => {
  switch (month) {
    case "Gennaio":
    case "Febbraio":
    case "Dicembre":
      return "Inverno"
    case "Marzo":
    case "Aprile":
    case "Maggio":
      return "Primavera"
    case "Giugno":
    case "Luglio":
    case "Agosto":
      return "Estate"
    case "Settembre":
    case "Ottobre":
    case "Novembre":
      return "Autunno"
    default:
      return "Mese non valido"
  }
}

console.log(getSeason("Dicembre"))

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Esercizio con l'Operatore Ternario
////////////////////////////////////////////////////////////

/**
 * Scrivi una funzione che accetta due parametri: un numero e un booleano.
 * Se il booleano è true, moltiplica il numero per 10. Se è false, dividilo per 10.
 * Usa l'operatore ternario per scrivere questa logica in una sola linea di codice.
 */

const tenProcessor = (number, boolean) => {
  return boolean ? FizzBuzz(number * 10) : number / 10
}

console.log(tenProcessor(12, true))

////////////////////////////////////////////////////////////
// ESERCIZIO 4: Ciclo For
////////////////////////////////////////////////////////////

/**
 * Usa un ciclo for per stampare tutti i numeri da 1 a 100.
 * Tuttavia, per ogni numero che è multiplo di 3, stampa "Fizz" invece del numero.
 * E per ogni numero che è multiplo di 5, stampa "Buzz". Per numeri che sono multipli
 * di entrambi 3 e 5, stampa "FizzBuzz".
 */

for (let i = 1; i <= 100; i++) {
  console.log(FizzBuzz(i))
}

////////////////////////////////////////////////////////////
// ESERCIZIO 5: Ciclo While
////////////////////////////////////////////////////////////

/**
 * Utilizza un ciclo while per generare e stampare una sequenza di numeri da 10 a 1.
 */

let number = 10
while (number >= 1) {
  console.log(number)
  number--
}

////////////////////////////////////////////////////////////
// ESERCIZIO 6: Iterazione su Array con For...Of
////////////////////////////////////////////////////////////
/**
 * Dato un array di numeri, usa un ciclo for...of per sommare tutti i numeri
 * e stampare il risultato.
 */
const names = ["Giuseppe", "Renzo", "Michele", "Rosa"]

const saluto = []
for (const name of names) {
  saluto.push(`Ciao ${name}`)
}

console.log(saluto)

////////////////////////////////////////////////////////////
// ESERCIZIO 7: Uso di forEach su Array
////////////////////////////////////////////////////////////

/**
 * Dato un array di stringhe, usa il metodo forEach per stampare ogni stringa
 * con il prefisso "Elemento: ".
 */

const surnames = ["Russo", "DAstolfi", "Calarota", "Marincolo"]

surnames.forEach((element) => {
  console.log(`Elemento: ${element}`)
})

////////////////////////////////////////////////////////////
// ESERCIZIO 8: Mapping di un Array
////////////////////////////////////////////////////////////

/**
 * Usa il metodo 'map' per creare un nuovo array che contenga il quadrato di ogni numero
 * in un array di numeri.
 */
const numbers = [5, 10, 20, 40, 21, 47]

const applyToArray = (callback, method, initialValue) => {
  return (array) => array[method](callback, initialValue)
}

// MAPS CALLBACK
// const quadratoCallback = (n) => n * 2
// const cuboCallback = (n) => n * 3
// const moltiplyAllCallback = (acc, current) => acc * current
// // FILTER CONDITIONS
// const verifyPariCallback = (n) => n % 2 === 0
// const findMaxCallback = (max, current) => (current > max ? current : max)

// export const quadrato = applyToArray(quadratoCallback, "map")
// export const pari = applyToArray(verifyPariCallback, "filter")
// export const maggiore10 = applyToArray(maggiore10Callback, "filter")

// quadrato(numbers)

// export const findMax = (initialValue) =>
//   applyToArray(findMaxCallback, "reduce", initialValue)

// const initialValue = numbers[0]
// console.log(findMax(initialValue)(numbers))

////////////////////////////////////////////////////////////
// ESERCIZIO 9: Filtrare un Array
////////////////////////////////////////////////////////////

/**
 * Dato un array di numeri, usa il metodo 'filter' per creare un nuovo array
 * che contiene solo numeri maggiori di 10.
 */
const maggiore10Callback = (n) => n > 10

// console.log(maggiore10(numbers, "filter"))
////////////////////////////////////////////////////////////
// ESERCIZIO 10: Riduzione di un Array
////////////////////////////////////////////////////////////

/**
 * Utilizza il metodo 'reduce' per trovare il prodotto di tutti i numeri in un array.
 */
export const multiplyAll = (initialValue) =>
  applyToArray(moltiplyAllCallback, "reduce", initialValue)
// console.log(multiplyAll(initialValue)(numbers))

////////////////////////////////////////////////////////////
// ESERCIZIO 11: Iterazione su Oggetti con For...In
////////////////////////////////////////////////////////////

const object = {
  name: "Giuseppe",
  surname: "Russo",
  age: 20,
  city: "Rossano",
}
/**
 * Dato un oggetto con diverse proprietà, usa un ciclo for...in per stampare
 * sia la chiave che il valore di ogni proprietà.
 * esempio: 'Chiave: [nome chiave], Valore: [valore]'
 */

for (const info in object) {
  console.log(`Chiave: ${info}, Valore: ${object[info]}`)
}
////////////////////////////////////////////////////////////
// ESERCIZIO 12: Uso di Object.keys()
////////////////////////////////////////////////////////////

/**
 * Utilizza Object.keys() per ottenere un array di chiavi di un oggetto e poi
 * stampa tutte le chiavi.
 */

console.log(Object.keys(object))

////////////////////////////////////////////////////////////
// ESERCIZIO 13: Uso di Object.values()
////////////////////////////////////////////////////////////

console.log(Object.values(object))

/**
 * Utilizza Object.values() per ottenere un array di valori di un oggetto e poi
 * stampa tutti i valori.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 14: Uso di Object.entries()
////////////////////////////////////////////////////////////
console.log(Object.entries(object))

/**
 * Utilizza Object.entries() per ottenere un array di coppie [chiave, valore]
 * di un oggetto e poi stampa ogni coppia.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 15: Filtraggio e Trasformazione di Dati di un Negozio Online
////////////////////////////////////////////////////////////

/**
 * Dato un array di oggetti che rappresentano prodotti di un negozio online,
 * ogni oggetto contiene nome, categoria, prezzo e disponibilità.
 * Scrivi una funzione che restituisca un nuovo array con solo i prodotti disponibili,
 * con un prezzo ridotto del 10% per quelli nella categoria "elettronica".
 * di un oggetto e poi stampa ogni coppia.
 *
 * I shop devono avere:
 *  - name
 *  - products
 *  - addProduct()
 */

// Implementa la soluzione qui

function generateShop(name) {
  return {
    name,
    products: [],
    addProduct(name, category, price, isAvailable) {
      this.products.push({
        name: name,
        category: category,
        price: price,
        isAvailable: isAvailable,
      })
    },
  }
}

const checkProductAvailability = (products) => {
  return products.filter((product) => product.isAvailable)
}

const checkAllowDiscount = (products) => {
  return products.map((product) => {
    if (product.category === "Elettronica") {
      return { ...product, price: product.price * 0.9 }
    }
    return product
  })
}

const smartShop = generateShop("Smart Shop")

smartShop.addProduct("Telefono", "Elettronica", 800, true)
smartShop.addProduct("Aspirapolvere", "Casa", 650, true)
smartShop.addProduct("PC", "Elettronica", 1365, true)
smartShop.addProduct("Vaso", "Casa", 75, false)

const availableProductsSmartShop = checkProductAvailability(smartShop.products)
const checkDiscount = checkAllowDiscount(availableProductsSmartShop)
console.log(availableProductsSmartShop)
console.log(checkDiscount)

////////////////////////////////////////////////////////////
// ESERCIZIO 16: Analisi di Dati Studenteschi
////////////////////////////////////////////////////////////

/**
 * Dato un array di oggetti che rappresentano studenti, con nome, cognome, e un array di voti,
 * scrivi una funzione che stampi il nome completo di ogni studente insieme alla sua media voti.
 * Se la media è inferiore a 6, stampa anche un messaggio di "insufficiente".
 */

// Implementa la soluzione qui

const students = [
  {
    name: "Mario",
    surname: "Rossi",
    votes: [4, 7, 9, 5, 6, 8, 7, 6, 7, 3],
  },
  {
    name: "Giuseppe",
    surname: "Russo",
    votes: [4, 6, 9, 5, 2, 8, 3, 6, 7, 3],
  },
  {
    name: "Renzo",
    surname: "Dastolfi",
    votes: [4, 1, 9, 5, 6, 4, 7, 6, 7, 7],
  },
  {
    name: "Stefano",
    surname: "Calarota",
    votes: [4, 7, 10, 5, 6, 8, 3, 6, 7, 3],
  },
  {
    name: "Margherita",
    surname: "Cannass",
    votes: [4, 7, 9, 5, 6, 8, 7, 6, 7, 3],
  },
]

const getFullNameAndVotesMedia = () => {
  return students.map((student) => {
    const fullName = `${student.name} ${student.surname}`
    const sum = student.votes.reduce((acc, curr) => acc + curr, 0)
    const avgAverage = sum / student.votes.length

    return {
      fullName,
      avgAverage,
      isInsufficient: avgAverage < 6 ? "Insufficiente" : "Sufficiente",
    }
  })
}

console.log(getFullNameAndVotesMedia(students))

////////////////////////////////////////////////////////////
// ESERCIZIO 17: Gestione di un Sistema di Prenotazioni
////////////////////////////////////////////////////////////

/**
 * Dato un oggetto che rappresenta un sistema di prenotazioni con diverse date,
 * ognuna con un array di orari disponibili, scrivi una funzione che, data una
 *  specifica data e un orario, aggiorna il sistema per rimuovere quell'orario
 * dalla disponibilità. Se l'orario non è disponibile, stampa un messaggio di errore.
 */

// Implementa la soluzione qui
