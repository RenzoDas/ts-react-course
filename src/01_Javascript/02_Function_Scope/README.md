# JavaScript Scope

Lo scope in JavaScript è un concetto fondamentale che determina la visibilità e la durata delle variabili e delle funzioni all'interno del codice. Esistono principalmente tre tipi di scope: globale, locale (o funzione), e block scope.

## 1. Global Scope

- **Definizione**: Quando una variabile è dichiarata fuori da qualsiasi funzione, possiede uno scope globale. Ciò significa che è accessibile da qualsiasi parte del codice JavaScript.
- **Attenzione**: L'uso eccessivo di variabili globali può portare a conflitti di nomi e a problemi di manutenibilità del codice.

## 2. Local (Function) Scope

- **Definizione**: Le variabili dichiarate all'interno di una funzione hanno uno scope locale, cioè sono accessibili solo all'interno della funzione in cui sono state dichiarate.
- **Comportamento**: Ogni funzione ha il proprio scope. Le variabili con lo stesso nome possono essere utilizzate in funzioni diverse senza conflitti.
- **Funzioni Annidate**: In funzioni annidate, lo scope interno può accedere alle variabili dello scope esterno.

## 3. Block Scope

- **Introduzione con ES6**: Con l'introduzione di ES6, JavaScript ha ottenuto il block scope attraverso le parole chiave `let` e `const`.
- **Definizione**: Variabili dichiarate con `let` e `const` all'interno di un blocco (delimitato da `{}`) sono accessibili solo all'interno di quel blocco.
- **Esempio**: Comune in strutture come cicli `for` e `if`.

## Altri Aspetti Importanti

- **Hoisting**: JavaScript "solleva" le dichiarazioni di variabili (e funzioni) all'inizio dello scope, ma non l'assegnazione dei valori.
- **Closure**: Una funzione può accedere alle variabili del suo scope esterno, formando una closure.
- **Shadowing**: Quando una variabile in uno scope interno ha lo stesso nome di una variabile nello scope esterno, si verifica lo shadowing. Questo può portare a confusione e errori.
- **Scope Chaining**: Lo scope chaining descrive come il motore JavaScript cerca una variabile o funzione nell'attuale scope; se non la trova, prosegue cercando nello scope superiore, fino a raggiungere lo scope globale. È fondamentale per funzioni definite in scope annidati, permettendo loro di "ricordare" e accedere alle variabili degli scope in cui sono state create.

# JavaScript Functions

Le funzioni in JavaScript sono uno dei componenti più potenti e flessibili del linguaggio. Esistono diversi tipi di funzioni, ognuna con le sue caratteristiche e utilizzi specifici.

## 1. Factory Functions

- **Definizione**: Una factory function è una funzione che restituisce un oggetto. Viene utilizzata per creare istanze di oggetti che condividono proprietà e comportamenti simili.
- **Caratteristiche**: Queste funzioni possono accettare parametri e utilizzarli per personalizzare l'oggetto restituito. Sono utili per evitare la duplicazione del codice quando si creano più oggetti con strutture simili.

## 2. Constructor Functions

- **Definizione**: Una constructor function è utilizzata per creare oggetti specifici. A differenza delle factory functions, vengono utilizzate con il nuovo operatore `new`.
- **Caratteristiche**: Queste funzioni inizializzano nuovi oggetti. Hanno convenzionalmente nomi che iniziano con una lettera maiuscola e utilizzano `this` per assegnare proprietà all'oggetto che verrà creato.

## 3. Arrow Functions

- **Definizione**: Le arrow functions sono una sintassi concisa per scrivere funzioni in JavaScript, introdotte in ES6. Sono definite con una freccia `=>`.
- **Caratteristiche**: Hanno una sintassi più breve rispetto alle funzioni tradizionali e non hanno il proprio `this`, `arguments`, `super` o `new.target`. Sono spesso utilizzate per le funzioni di callback e le funzioni che richiedono un contesto `this` non vincolato.

## 4. High Order Functions

- **Definizione**: Una high order function è una funzione che può accettare altre funzioni come argomenti e/o restituire una funzione come risultato.
- **Caratteristiche**: Queste funzioni sono un concetto fondamentale nella programmazione funzionale. Sono utilizzate per astrazioni come mappare, ridurre, e filtrare dati in array. Consentono una maggiore modularità e riusabilità del codice.
