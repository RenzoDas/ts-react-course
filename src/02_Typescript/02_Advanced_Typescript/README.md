# Desing pattern in JS/TS

## JS e TS Design pattern

## Design  pattern
Ci sono vari tipi di design pattern, suddivisi in diverse categorie. Ecco alcune delle categorie principali di design pattern:

**Creazionali**:

- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

**Strutturali**:

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

**Comportamentali**:

- Observer
- Strategy
- Command
- Chain of Responsibility
- State
- Visitor
- Template Method
- Memento
- Interpreter
- Mediator

**Architetturali**:

- MVC (Model-View-Controller)
- MVVM (Model-View-ViewModel)
- Dependency Injection (Iniezione di Dipendenza)
- Repository

**Concurrency (Concorrenza)**:

- Lock
- Double-Checked Locking

**Altri**:

- Null Object
- Specification
- Publish-Subscribe

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

Il pattern Observer permette di definire una dipendenza uno-a-molti tra oggetti in modo che, quando un oggetto cambia stato, tutti i suoi dipendenti vengono notificati e aggiornati automaticamente. Si basa su un soggetto (osservabile) che mantiene una lista di osservatori e li notifica in caso di eventi. È utile per implementare sistemi di notifica dove gli osservatori si sottoscrivono per ricevere aggiornamenti dall'osservabile.

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

## Factory
Nell'ambito dello sviluppo software, il Factory Pattern è un design pattern creazionale che fornisce un'interfaccia per creare oggetti in una superclasse, ma consente alle sottoclassi di alterare il tipo di oggetti che verranno creati. Questo approccio è particolarmente utile quando si hanno diverse sottoclassi che condividono un'interfaccia comune. In TypeScript, possiamo implementare il Factory Pattern senza utilizzare classi, sfruttando invece i tipi e le funzioni per creare una varietà di oggetti. Di seguito è presentato un esempio pratico che dimostra come creare diversi tipi di veicoli —auto, moto e biciclette— utilizzando una funzione di fabbrica basata su condizioni specifiche per ogni tipo di veicolo. 

### Esempio di Scenario:

Supponiamo di dover creare diversi tipi di veicoli (auto, moto, biciclette) utilizzando un design pattern Factory senza utilizzare classi.

### Implementazione:

``` typescript

// Definizione degli enum per i tipi di veicoli
enum VehicleType {
  Car = 'car',
  Motorcycle = 'motorcycle',
  Bicycle = 'bicycle',
}

// Funzione di fabbrica per creare veicoli
const createVehicle = (type: VehicleType) => {
  switch (type) {
    case VehicleType.Car:
      return {
        type: VehicleType.Car,
        wheels: 4,
        engine: 'combustion',
      };
    case VehicleType.Motorcycle:
      return {
        type: VehicleType.Motorcycle,
        wheels: 2,
        engine: 'internal combustion',
      };
    case VehicleType.Bicycle:
      return {
        type: VehicleType.Bicycle,
        wheels: 2,
        engine: 'muscle power',
      };
    default:
      throw new Error('Tipo di veicolo non valido');
  }
};

// Utilizzo della funzione di fabbrica per creare veicoli
const car = createVehicle(VehicleType.Car);
const motorcycle = createVehicle(VehicleType.Motorcycle);
const bicycle = createVehicle(VehicleType.Bicycle);

console.log(car);         // Output: { type: 'car', wheels: 4, engine: 'combustion' }
console.log(motorcycle);  // Output: { type: 'motorcycle', wheels: 2, engine: 'internal combustion' }
console.log(bicycle);     // Output: { type: 'bicycle', wheels: 2, engine: 'muscle power' }


```

In questo esempio, abbiamo creato una funzione di fabbrica createVehicle che prende un tipo di veicolo come argomento e restituisce un oggetto con le specifiche del veicolo. Utilizzando questa funzione di fabbrica, possiamo creare diverse istanze di veicoli senza dover definire classi specifiche per ciascun tipo di veicolo.


## FACADE

Il pattern Facade in TypeScript è estremamente utile quando si lavora su sistemi complessi, offrendo un'interfaccia semplice per interagire con una o più sottosistemi complessi. Questo pattern è particolarmente vantaggioso in scenari di sviluppo frontend e backend, dove l'obiettivo è ridurre la complessità per gli sviluppatori e migliorare l'usabilità del sistema.

### Esempio di Scenario:

Immaginiamo di dover creare una "Facciata" per un sistema di gestione di un negozio online che comprende diverse operazioni complesse, come l'aggiunta di un prodotto al carrello, il calcolo del totale e il processo di pagamento.

### Implementazione:

``` typescript

// Funzione di facciata per il sistema di gestione del negozio online
const onlineStoreFacade = () => {
  const cart: { [productId: string]: number } = {};

  const addToCart = (productId: string, quantity: number) => {
    if (!cart[productId]) {
      cart[productId] = 0;
    }
    cart[productId] += quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    for (const productId in cart) {
      // Simuliamo un sistema di prezzi per ciascun prodotto
      const price = getProductPrice(productId);
      total += price * cart[productId];
    }
    return total;
  };

  const processPayment = () => {
    // Simuliamo il processo di pagamento
    return `Pagamento effettuato per un totale di $${calculateTotal()}`;
  };

  // Funzione per ottenere il prezzo di un prodotto (simulazione)
  const getProductPrice = (productId: string) => {
    // In una vera applicazione, si otterrebbero i prezzi dai dati del prodotto
    const prices: { [productId: string]: number } = {
      'product1': 10,
      'product2': 20,
      'product3': 15,
    };
    return prices[productId] || 0;
  };

  return {
    addToCart,
    calculateTotal,
    processPayment,
  };
};

// Utilizzo della facciata del negozio online
const store = onlineStoreFacade();

store.addToCart('product1', 2);
store.addToCart('product2', 1);

const total = store.calculateTotal();
console.log(`Totale nel carrello: $${total}`);

const paymentResult = store.processPayment();
console.log(paymentResult); // Simula il pagamento
``` 

In questo esempio, abbiamo creato una funzione di facciata onlineStoreFacade che semplifica l'interazione con un sistema di gestione del negozio online. La facciata fornisce un'interfaccia semplificata per le operazioni di aggiunta al carrello, calcolo del totale e processo di pagamento, nascondendo i dettagli complessi. Utilizzando questa facciata, l'utente può interagire con il sistema di gestione del negozio online in modo più intuitivo senza preoccuparsi dei dettagli implementativi.

