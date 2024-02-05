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

const GlobalConfig = (() => {
  let instance;
  let configData;

  function createInstance() {
    // Creazione dell'oggetto di configurazione
    const config = {};

    // Inizializzazione dei dati di configurazione
    configData = {
      apiUrl: "https://api.example.com",
      apiKey: "your-api-key",
      time: Date.now()
    };

    // Metodo per ottenere i dati di configurazione
    config.getConfig = () => {
      return configData;
    };

    return config;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Utilizzo della configurazione globale
const globalConfigInstance1 = GlobalConfig.getInstance();
console.log(globalConfigInstance1.getConfig()); // Output: { apiUrl: "https://api.example.com", apiKey: "your-api-key", time: timestamp }

const globalConfigInstance2 = GlobalConfig.getInstance();
console.log(globalConfigInstance2.getConfig()); // Output: { apiUrl: "https://api.example.com", apiKey: "your-api-key", time: timestamp }

// Entrambe le istanze puntano allo stesso oggetto di configurazione globale
console.log(globalConfigInstance1 === globalConfigInstance2); // Output: true

``` 

In questo esempio, abbiamo implementato un Singleton chiamato GlobalConfig che gestisce una configurazione globale. Le istanze di GlobalConfig possono accedere ai dati di configurazione, ma assicurano che ci sia una sola istanza condivisa in tutto il codice.
