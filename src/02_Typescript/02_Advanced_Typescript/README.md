# Desing pattern in JS/TS

## JS e TS Design pattern

## Adapter

#### Esempio di Scenario
Immaginiamo di avere un sistema che si aspetta dati in un certo formato, ma abbiamo una fonte di dati che fornisce tali dati in un formato diverso. Useremo il pattern Adapter per convertire i dati dal formato fornito al formato atteso.

#### Implementazione 
Supponiamo che il nostro sistema si aspetta dati con le proprietà name e age, ma la nostra fonte di dati fornisce oggetti con le proprietà firstName, lastName e years.

```javascript

// Oggetto con il formato non compatibile
const oldInterfaceData = {
    firstName: "Mario",
    lastName: "Rossi",
    years: 30
};

// Funzione Adapter che adatta l'oggetto dal vecchio al nuovo formato
function adaptToNewFormat(oldData) {
    return {
        name: `${oldData.firstName} ${oldData.lastName}`,
        age: oldData.years
    };
}

// Utilizzo dell'Adapter per convertire i dati
const newData = adaptToNewFormat(oldInterfaceData);

console.log(newData); // { name: 'Mario Rossi', age: 30 }
```

Abbiamo un oggetto oldInterfaceData che rappresenta il formato dei dati non compatibile.
La funzione adaptToNewFormat funge da adapter, prendendo un oggetto con il vecchio formato come input e restituendo un nuovo oggetto che corrisponde al formato atteso dal nostro sistema.
Infine, convertiamo oldInterfaceData in newData utilizzando il nostro adapter e lo stampiamo per vedere che ora ha il formato compatibile.



## Singleton

### Esempio di Scenario:

Immagina di dover gestire una configurazione globale all'interno di una applicazione JavaScript. Vuoi che questa configurazione sia accessibile da qualsiasi parte del tuo codice, ma vuoi anche assicurarti che ci sia una sola istanza della configurazione in tutto il tuo programma.

### Implementazione:

``` javascript

interface ConfigData {
  apiUrl: string;
  apiKey: string;
  time: number;
}

type Singleton = {
  getInstance: () => ConfigData;
};

const GlobalConfig: Singleton = (() => {
  let instance: ConfigData | undefined; // Use undefined for initial value

  function createInstance(): ConfigData {
    // Creazione dell'oggetto di configurazione
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
``` 

In questo esempio, abbiamo implementato un Singleton chiamato GlobalConfig che gestisce una configurazione globale. Le istanze di GlobalConfig possono accedere ai dati di configurazione, ma assicurano che ci sia una sola istanza condivisa in tutto il codice.


## NOTA SINGLE THREAD
JavaScript è principalmente single-threaded, il che significa che esegue un'unica sequenza di operazioni alla volta nel contesto principale dell'interfaccia utente (UI) del browser o nell'ambiente Node.js. Questo è dovuto alla natura asincrona e al modello di event loop di JavaScript, che consente di gestire le operazioni in modo non bloccante.

Tuttavia, JavaScript offre anche alcune funzionalità per la concorrenza e il multithreading attraverso:

- Web Workers: I Web Workers consentono di eseguire script JavaScript in thread separati, noti come worker threads. Questi worker threads possono eseguire operazioni in background senza influenzare il thread principale dell'UI. Tuttavia, i worker threads hanno limitazioni nella condivisione di dati con il thread principale.

- Async/Await e Promises: JavaScript utilizza le Promises e l'approccio Async/Await per gestire le operazioni asincrone in modo più efficiente senza bloccare il thread principale. Questo permette di scrivere codice che sembra eseguire operazioni in modo concorrente anche se è ancora eseguito in modo single-threaded.

Altri contesti concorrenti
- Node.js Cluster Module
- WebAssembly


## Observer

### Esempio di Scenario:

Immagina di dover implementare un sistema di notifica in un'applicazione TypeScript. Vuoi che diversi componenti dell'applicazione possano ricevere notifiche quando determinati eventi accadono, senza utilizzare classi per l'implementazione.

###  Implementazione:

```typescript
// Definizione del tipo per i callback degli osservatori
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

```

In questo esempio, abbiamo creato un sistema di notifica senza l'utilizzo di classi. Abbiamo definito una funzione createObservable per creare un oggetto soggetto osservabile, e una funzione createObserver per creare osservatori. Gli osservatori sono semplici funzioni che vengono chiamate quando il soggetto notifica un evento.
