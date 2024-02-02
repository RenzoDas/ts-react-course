# Desing pattern in JS/TS

## JS e TS Design pattern


### Esempio di Scenario
Immaginiamo di avere un sistema che si aspetta dati in un certo formato, ma abbiamo una fonte di dati che fornisce tali dati in un formato diverso. Useremo il pattern Adapter per convertire i dati dal formato fornito al formato atteso.

### Implementazione 
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
