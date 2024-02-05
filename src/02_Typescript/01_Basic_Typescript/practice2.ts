////////////////////////////////////////////////////////////
// ESERCIZIO 1: Tipi Compositi
////////////////////////////////////////////////////////////

/**
Crea funzioni che lavorano con tipi compositi (array e oggetti).
Dettagli:
- Scrivi una funzione che accetta un array di oggetti "Persona" (con nome e cognome) e restituisce un array delle loro iniziali.
- Realizza una funzione che trasforma un oggetto mappando le sue chiavi a una descrizione del valore (es: da {a: 1, b: "test"} a {"a": "Numero: 1", "b": "Stringa: test"}).
Questo esercizio ti aiuterà a manipolare strutture di dati complesse.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 2: Tipi di Funzione
////////////////////////////////////////////////////////////

/**
Crea tipi di funzione personalizzati e utilizzali in diverse funzioni.
Dettagli:
- Definisci un tipo di funzione per un'operazione (es. somma, sottrazione) e usalo come parametro in una funzione di ordine superiore (High order functions) che applica l'operazione a una serie di numeri.
- Implementa una funzione che prende una funzione di callback come parametro e la invoca con risultati diversi a seconda di alcune condizioni interne.
Questo esercizio ti permette di esplorare l'uso dei tipi di funzione e delle funzioni di ordine superiore (High order functions).
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Destructuring e Spread
////////////////////////////////////////////////////////////

/**
Utilizza il destructuring e l'operatore spread per lavorare con oggetti e array.
Dettagli:
- Crea una funzione che accetta un array e restituisce un nuovo array composto dal primo elemento e dal "resto" degli elementi.
- Scrivi una funzione che unisce due oggetti utente con lo spread operator, dando priorità alle proprietà del secondo oggetto in caso di conflitto.
Questo esercizio ti permette di manipolare e combinare dati in modi flessibili.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 4: Parametri Rest e Tuple
////////////////////////////////////////////////////////////

/**
Sperimenta con parametri rest e tuple nei tipi di funzione.
Dettagli:
- Definisci una funzione che accetta un numero variabile di argomenti e li restituisce in una tupla.
- Implementa una funzione che accetta una tupla di elementi e restituisce un oggetto con proprietà denominate basate sulla tupla.
Questo esercizio ti aiuterà a capire come i parametri rest e le tuple possono rendere le tue funzioni più flessibili.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 5: Advanced Types
////////////////////////////////////////////////////////////

/**
Lavora con tipi avanzati come Never, Unknown, e Conditional Types.
Dettagli:
- Scrivi una funzione che utilizza un tipo condizionale per restituire tipi diversi in base ai parametri di input.
- Crea una funzione che accetta un parametro di tipo 'unknown' e utilizza il controllo del tipo per trattare diversamente i dati in base al loro tipo reale.
Questo esercizio ti permetterà di gestire casi di codice più complessi e dinamici.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 6: Pattern di Progettazione
////////////////////////////////////////////////////////////

/**
Implementa funzioni che utilizzano pattern di progettazione comuni in TypeScript.
Dettagli:
- Crea una "Factory Function" che genera oggetti con una struttura specifica.
- Implementa il pattern "Module" per raggruppare funzionalità correlate in un unico ambito.
Questo esercizio ti darà pratica nell'applicare pattern di progettazione per strutturare il tuo codice in modo efficace.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 7: Funzioni Generiche per il Lavoro con Array
////////////////////////////////////////////////////////////

/**

Implementa una funzione generica 'trovaElemento' che accetta un array di elementi di un tipo generico e un criterio di ricerca.
La funzione deve restituire l'elemento se trovato, altrimenti undefined.
Esempio: trovaElemento([1, 2, 3, 4], x => x > 2) dovrebbe restituire 3.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 8: Funzione Generica per il Mapping di Array
////////////////////////////////////////////////////////////

/**

Scrivi una funzione generica 'mapeArray' che accetta un array di qualsiasi tipo e una funzione di mapping.
La funzione di mapping trasforma ogni elemento dell'array in un altro tipo.
La funzione 'mapArray' deve restituire un nuovo array con gli elementi trasformati.
*/
////////////////////////////////////////////////////////////
// ESERCIZIO 9: Vincoli nei Generics
////////////////////////////////////////////////////////////

/**

Scrivi una funzione generica 'proprietàUnica' che accetta un array di oggetti di un tipo generico e il nome di una chiave.
La funzione deve restituire un array di tutti i valori unici per quella chiave.
Usa vincoli nei generics per assicurarti che la chiave esista nel tipo generico.
*/
////////////////////////////////////////////////////////////
// ESERCIZIO 10: Generics con Tuple
////////////////////////////////////////////////////////////

/**

Crea una funzione generica 'coppia' che accetta due parametri di tipi potenzialmente diversi e restituisce una tupla di quei tipi.
Esempio: coppia('hello', 42) dovrebbe restituire un valore di tipo [string, number].
*/
////////////////////////////////////////////////////////////
// ESERCIZIO 11: Tipi Generici Condizionali
////////////////////////////////////////////////////////////

/**

Definisci un tipo generico 'PromessaOValore' che, dato un tipo, restituisca il tipo stesso se non è una Promessa, altrimenti il tipo di valore risolto dalla Promessa.
Utilizza i tipi condizionali di TypeScript per implementare questo tipo.
*/
////////////////////////////////////////////////////////////
// ESERCIZIO 12: Generics e High Order Functions
////////////////////////////////////////////////////////////

/**

Crea una funzione di ordine superiore 'conLog' che accetta una funzione e restituisce una nuova funzione.
La nuova funzione, quando invocata, chiama la funzione originale e poi stampa il risultato.
Assicurati che 'conLog' sia generica per conservare i tipi dei parametri e del valore di ritorno della funzione originale.
*/
