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

type InvertiArray<T> = (array: T[]) => T[];

function invertiArray<T>(array: T[]): T[] {
  return array.reverse();
}

class CassettaDegliAttrezzi<T> {
  oggetto: T;

  constructor(oggetto: T) {
    this.oggetto = oggetto;
  }
}

function creaCassettaDegliAttrezzi<T>() {
  const cassetta: T[] = [];
  const aggiungi = (oggetto: T) => {
    cassetta.push(oggetto);
  };
  const rimuovi = (): void => {
    cassetta.pop();
  };
  const visualizza = (): T[] => {
    return cassetta;
  };

  return { aggiungi, rimuovi, visualizza };
}

interface TipoOggetto {
  nome: string;
  peso: number;
}
const x = creaCassettaDegliAttrezzi<TipoOggetto>();
x.aggiungi({ nome: "martello", peso: 5 });
x.aggiungi({ nome: "metro", peso: 1 });
x.rimuovi();
console.log(x.visualizza());

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

type StringOrNumber = string | number;

interface Name {
  name: string;
}

interface Age {
  age: number;
}

type Person = Name & Age;

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

type AppState = "loading" | "success" | "error";

class App {
  state: AppState;

  constructor() {
    this.state = "loading";
  }

  updateAppState = (_state: AppState): void => {
    this.state = _state;
    console.log(`App state updated to: ${this.state}`);
  };

  canPerformAction = (): boolean => {
    return this.state === "success";
  };
}

const app = new App();
app.updateAppState("loading");
app.updateAppState("success");

if (app.canPerformAction()) {
  console.log("Performing action...");
} else {
  console.log("Cannot perform action, app is not in 'success' state.");
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

function manipolaDato(data: any): void {
  const innerData = data as string;
  console.log(innerData.toLowerCase());
}

// function usoErrato(someValue: any): string {
//   let strToFix: number = someValue as number;
//   return strToFix.toFixed();
// }

// usoErrato("questa è una stringa"); //errore, crasha in runtime

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

function isString(data: any): data is string {
  return typeof data === "string";
}

function gestisciDatoAvanzato(data: any): void {
  if (isString(data)) {
    console.log(`${data} è una stringa`);
  } else {
    console.log(`Non è una stringa`);
  }
}

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

interface Prodotto {
  tipo: "sconto" | "pieno";
  prezzo: number;
}

function calcolaSconto({ tipo, prezzo }: Prodotto): number {
  return tipo === "sconto" ? prezzo * 0.1 : prezzo;
}

const prodottoPieno: Prodotto = {
  tipo: "pieno",
  prezzo: 10,
};
const prodottoSconto: Prodotto = {
  tipo: "sconto",
  prezzo: 10,
};

console.log(calcolaSconto(prodottoPieno));
console.log(calcolaSconto(prodottoSconto));

////////////////////////////////////////////////////////////
// ESERCIZIO 9.1: Tipi Discriminati
////////////////////////////////////////////////////////////

/**
Esercizio 1: Tipi Avanzati
Supponiamo di avere un array di oggetti con diversi tipi di dati. 
Creare una funzione chiamata filtraStringhe che prende un array e restituisce un nuovo array contenente solo le stringhe dall'array originale.
*/

type RandomArray = (string | number | boolean)[];

function filtraStringhe(array: RandomArray): string[] {
  return array.filter((elemento) => typeof elemento === "string") as string[];
}

//Esempio di utilizzo
const arrayDiOggetti = [1, "due", 3, "quattro", "cinque", 6, true];
const stringheFiltrate = filtraStringhe(arrayDiOggetti);

console.log(stringheFiltrate); // Stampa: ['due', 'quattro', 'cinque']

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

/**
 * Singleton Exercise
 */

interface ConfigData {
  apiUrl: string;
  apiKey: string;
  time: number;
}

type SingletonInstance = {
  getInstance: () => ConfigData;
};

const GlobalConfig: SingletonInstance = (() => {
  let instance: ConfigData | undefined;

  function createInstance(): ConfigData {
    // Creazione dell'oggetto di configurazione
    // Inizializzazione dei dati di configurazione
    const config: ConfigData = {
      apiUrl: "https://api.example.com",
      apiKey: "your-api-key",
      time: Date.now(),
    };

    return config;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Utilizzo della configurazione globale
const globalConfigInstance1 = GlobalConfig.getInstance();
console.log(globalConfigInstance1); // Output: { apiUrl: "https://api.example.com", apiKey: "your-api-key", time: timestamp }

const globalConfigInstance2 = GlobalConfig.getInstance();
console.log(globalConfigInstance2); // Output: { apiUrl: "https://api.example.com", apiKey: "your-api-key", time: timestamp }

// Entrambe le istanze puntano allo stesso oggetto di configurazione globale
console.log(globalConfigInstance1 === globalConfigInstance2); // Output: true

//Observer

type ObserverCallback = (data: any) => void;

// Creazione di un oggetto soggetto osservabile
const createObservable = () => {
  const observers: ObserverCallback[] = [];

  const addObserver = (observer: ObserverCallback) => {
    observers.push(observer);
  };

  const removeObserver = (observer: ObserverCallback) => {
    const index = observers.indexOf(observer);
    if (index !== -1) {
      observers.splice(index, 1);
    }
  };

  const notifyObservers = (data: any) => {
    for (const observer of observers) {
      observer(data);
    }
  };

  return {
    addObserver,
    removeObserver,
    notifyObservers,
  };
};

// Creazione di un osservatore
const createObserver = () => {
  const update = (data: any) => {
    console.log(`Osservatore ricevuto un aggiornamento: ${data}`);
  };

  return update;
};

// Utilizzo del pattern Observer
const observable = createObservable();
const observer1 = createObserver();
const observer2 = createObserver();

// Aggiunta degli osservatori all'oggetto osservabile
observable.addObserver(observer1);
observable.addObserver(observer2);

// Simulazione di un evento che notifica gli osservatori
observable.notifyObservers("Evento importante!");

// Output:
// Osservatore ricevuto un aggiornamento: Evento importante!
// Osservatore ricevuto un aggiornamento: Evento importante!
