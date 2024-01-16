/*
 * ESERCIZI PRATICI - JavaScript Asincrono
 * --------------------------------------------------------
 * Questo documento contiene esercizi pratici per comprendere
 * il funzionamento dell'asincronia in JavaScript.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 1: Uso di Callbacks
////////////////////////////////////////////////////////////

/**
 * Scrivi una funzione che accetta una callback e la invoca dopo un ritardo.
 * La callback dovrebbe stampare un messaggio.
 * Usa `setTimeout` per simulare il ritardo.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 2: Conversione Callback in Promise
////////////////////////////////////////////////////////////

/**
 * Converte l'esercizio 1 in una Promise invece di utilizzare una callback.
 * Usa la Promise per gestire il ritardo e poi stampa il messaggio.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Gestione degli Errori in Promises
////////////////////////////////////////////////////////////

/**
 * Crea una Promise che si risolve o rifiuta in base a una condizione.
 * Gestisci entrambi i casi (resolve e reject) e stampa i messaggi appropriati.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 4: Uso di Async/Await
////////////////////////////////////////////////////////////

/**
 * Riscrivi l'esercizio 2 usando `async` e `await` anziché then/catch.
 * Gestisci il successo e l'errore con un blocco try/catch.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 5: Catena di Promises
////////////////////////////////////////////////////////////

/**
 * Crea una serie di funzioni che ritornano Promises.
 * Chiama queste funzioni in una catena di Promises.
 * Usa `.then()` e `.catch()` per gestire i risultati e gli errori.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 6: Catena di Async/Await
////////////////////////////////////////////////////////////

/**
 * Riscrivi l'esercizio 5 usando `async/await`.
 * Gestisci i risultati e gli errori con try/catch.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 7: Async/Await con Parallelismo
////////////////////////////////////////////////////////////

/**
 * Crea più funzioni che ritornano Promises.
 * Usa `async/await` per attendere che tutte le Promises siano risolte usando `Promise.all`.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 8: Fetch API con Async/Await
////////////////////////////////////////////////////////////

/**
 * Usa la Fetch API per ottenere dati da un URL.
 * Gestisci la richiesta come una Promise con `async/await`.
 * Stampa il risultato o cattura gli errori.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 9: Timeout con Promise
////////////////////////////////////////////////////////////

/**
 * Crea una funzione che restituisce una Promise che si risolve o si rifiuta
 * basata su un timeout. Se l'operazione è troppo lunga, la Promise dovrebbe essere rifiutata.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 10: Custom Promise
////////////////////////////////////////////////////////////

/**
 * Scrivi una funzione che crea e ritorna una nuova Promise.
 * La Promise dovrebbe risolversi con un valore specifico dopo un ritardo.
 */
