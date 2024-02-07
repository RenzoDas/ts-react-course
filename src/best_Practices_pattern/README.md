# Best Practices e Pattern


## Introduzione a Separation of Concerns (SoC)
La Separation of Concerns (SoC) è un principio di progettazione software che propone di suddividere un programma informatico in parti distinte, ognuna delle quali si occupa di una specifica preoccupazione (o "concern"). L'obiettivo è ridurre la complessità del software, facilitando la manutenzione, l'aggiornamento e la scalabilità. Questo principio è stato formulato per la prima volta da Edsger W. Dijkstra nel 1974, il quale sottolineava l'importanza di poter separare questioni differenti all'interno del software per gestirle indipendentemente.

### Utilizzi in Applicazioni Front-end e Back-end
Nel contesto delle applicazioni front-end, SoC si manifesta nella separazione tra la logica di presentazione (UI) e la logica di business. Questo si traduce in una distinzione chiara tra i componenti che gestiscono la visualizzazione (come i componenti di presentazione in React) e quelli che gestiscono lo stato e la logica applicativa (come i container o i servizi).

Per le applicazioni back-end, SoC implica la divisione dell'applicazione in diversi strati, come il livello di accesso ai dati, il livello di logica di business e il livello di presentazione (API). Questo facilita la gestione del codice e la possibilità di lavorare su parti specifiche dell'applicazione senza influenzare le altre.

### SoC in TypeScript + React: Esempi Pratici

Una delle applicazioni più comuni di SoC in React è la divisione tra **componenti presentazionali** e **container**. I componenti presentazionali sono responsabili della visualizzazione e ricevono dati come props, mentre i componenti container gestiscono la logica, lo stato e i dati da passare ai componenti presentazionali.

**Esempio**:

```typescript

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);


```

Il Composition Pattern sfrutta la composizione di componenti per riutilizzare la logica in modo flessibile. Al posto dell'ereditarietà, i componenti React possono utilizzare la composizione per condividere funzionalità, mantenendo separati i concern specifici.

**Esempio**:

```typescript

import React, { useState, useEffect } from 'react';

const UserListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await fetchUsers(); // Assumi che fetchUsers sia definita altrove
      setUsers(usersData);
    };

    fetchUsers();
  }, []); // L'array vuoto indica che questo effetto viene eseguito solo al montaggio del componente

  return <UserList users={users} />;
};


```


### Conclusione
La Separation of Concerns è un principio fondamentale nella progettazione del software che, quando applicato correttamente, può portare a codice più pulito, più mantenibile e più facile da estendere. Nel contesto di TypeScript e React, SoC aiuta a gestire la complessità dell'applicazione dividendo la logica di business dalla logica di presentazione e sfruttando pattern come la composizione e la distinzione tra componenti presentazionali e container.


## Composition Pattern

Il Composition Pattern è molto utilizzato nella programmazione React, permette di costruire componenti complessi componendo insieme componenti più semplici. Questo approccio è in linea con il principio filosofico di React che incoraggia la composizione piuttosto che l'ereditarietà. In TypeScript, questo pattern può essere applicato grazie ai tipi statici che aiutano a gestire le props e gli stati dei componenti.

### Esempio Base di Composition Pattern
Abbiamo un componente Button e creaiamo un componente IconButton che lo compone aggiungendo un'icona.

``` typescript
import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick }) => {
  return (
    <Button onClick={onClick}>
      {icon}
      {label}
    </Button>
  );
};
```


### Variazioni del Composition Pattern
Una variazione del Composition Pattern è l'uso dei "slots", dove invece di passare i componenti figli direttamente, li si passa attraverso un oggetto di props. Questo approccio ti permette di posizionare i componenti figli in posti specifici all'interno del componente padre.

**Esempio**
``` typescript

type CardProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ header, body, footer }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};
``` 


### Higher-Order Components (HOC)
Un altro modo di applicare la composizione è attraverso l'uso di Higher-Order Components (HOC). Questi sono funzioni che prendono un componente e restituiscono un nuovo componente con proprietà aggiuntive o logica.

**Esempio**:

``` typescript

function withLoadingIndicator<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return (
      <>
        <Component {...props} />
        <div>Loading...</div>
      </>
    );
  };
}

const ButtonWithLoading = withLoadingIndicator(Button);
```

nell'esempio  un HOC che aggiunge un indicatore di caricamento a qualsiasi componente gli viene passato.
