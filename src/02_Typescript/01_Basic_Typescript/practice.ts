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

////////////////////////////////////////////////////////////
// ESERCIZIO 9.1: Tipi Discriminati
////////////////////////////////////////////////////////////

/**

Esercizio 1: Tipi Discriminati

Supponiamo di avere un'interfaccia Prodotto che rappresenta un prodotto con due campi: tipo e prezzo. 
Il campo tipo discrimina tra i tipi di prodotto. 
Implementare una funzione chiamata calcolaSconto che prende un prodotto come argomento e restituisce il prezzo 
con uno sconto del 10% se il tipo del prodotto è "sconto". Altrimenti, restituire il prezzo senza sconto.
*/

////////////////////////////////////////////////////////////
// ESERCIZIO 9.1: Tipi Discriminati
////////////////////////////////////////////////////////////

/**

Esercizio 1: Tipi Avanzati

Supponiamo di avere un array di oggetti con diversi tipi di dati. 
Creare una funzione chiamata filtraStringhe che prende un array e restituisce un nuovo array contenente solo le stringhe dall'array originale.
*/

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
