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

// Numeri: Includono sia interi che float.

// Booleani: Valori veri o falsi.

// Oggetti: Collezioni di proprietà.

// Arrays: Liste ordinate di elementi.

// Undefined e Null: Rappresentano l'assenza di un valore.

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
// Di Assegnazione: (=, +=, -=, *=, /=)
// Di Confronto: (==, ===, !=, !==)
// Logici: (&&, ||, !, ??)

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
