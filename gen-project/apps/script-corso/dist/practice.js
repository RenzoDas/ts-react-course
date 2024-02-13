"use strict";
////////////////////////////////////////////////////////////
// ESERCIZIO 1: Tipi di Base
////////////////////////////////////////////////////////////
function invertiArray(array) {
    return array.reverse();
}
class CassettaDegliAttrezzi {
    constructor(oggetto) {
        this.oggetto = oggetto;
    }
}
function creaCassettaDegliAttrezzi() {
    const cassetta = [];
    const aggiungi = (oggetto) => {
        cassetta.push(oggetto);
    };
    const rimuovi = () => {
        cassetta.pop();
    };
    const visualizza = () => {
        return cassetta;
    };
    return { aggiungi, rimuovi, visualizza };
}
const x = creaCassettaDegliAttrezzi();
x.aggiungi({ nome: "martello", peso: 5 });
x.aggiungi({ nome: "metro", peso: 1 });
x.rimuovi();
console.log(x.visualizza());
class App {
    constructor() {
        this.updateAppState = (_state) => {
            this.state = _state;
            console.log(`App state updated to: ${this.state}`);
        };
        this.canPerformAction = () => {
            return this.state === "success";
        };
        this.state = "loading";
    }
}
const app = new App();
app.updateAppState("loading");
app.updateAppState("success");
if (app.canPerformAction()) {
    console.log("Performing action...");
}
else {
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
function manipolaDato(data) {
    const innerData = data;
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
function isString(data) {
    return typeof data === "string";
}
function gestisciDatoAvanzato(data) {
    if (isString(data)) {
        console.log(`${data} è una stringa`);
    }
    else {
        console.log(`Non è una stringa`);
    }
}
function calcolaSconto({ tipo, prezzo }) {
    return tipo === "sconto" ? prezzo * 0.1 : prezzo;
}
const prodottoPieno = {
    tipo: "pieno",
    prezzo: 10,
};
const prodottoSconto = {
    tipo: "sconto",
    prezzo: 10,
};
console.log(calcolaSconto(prodottoPieno));
console.log(calcolaSconto(prodottoSconto));
function filtraStringhe(array) {
    return array.filter((elemento) => typeof elemento === "string");
}
//Esempio di utilizzo
const arrayDiOggetti = [1, "due", 3, "quattro", "cinque", 6, true];
const stringheFiltrate = filtraStringhe(arrayDiOggetti);
console.log(stringheFiltrate); // Stampa: ['due', 'quattro', 'cinque']
const GlobalConfig = (() => {
    let instance;
    function createInstance() {
        // Creazione dell'oggetto di configurazione
        // Inizializzazione dei dati di configurazione
        const config = {
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
// Creazione di un oggetto soggetto osservabile
const createObservable = () => {
    const observers = [];
    const addObserver = (observer) => {
        observers.push(observer);
    };
    const removeObserver = (observer) => {
        const index = observers.indexOf(observer);
        if (index !== -1) {
            observers.splice(index, 1);
        }
    };
    const notifyObservers = (data) => {
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
    const update = (data) => {
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
