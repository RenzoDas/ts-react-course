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

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

export default UserList;


```

Il Composition Pattern sfrutta la composizione di componenti per riutilizzare la logica in modo flessibile. Al posto dell'ereditarietà, i componenti React possono utilizzare la composizione per condividere funzionalità, mantenendo separati i concern specifici.

**Esempio**:

```typescript

const UserListContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      // Qui dovresti inserire il tuo codice per recuperare gli utenti, ad esempio tramite fetch API
      // const response = await fetch('your-api-endpoint');
      // const data: User[] = await response.json();
      // setUsers(data);
    }
  
    fetchUsers();
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta, al montaggio del componente

  return <UserList users={users} />;
};

export default UserListContainer;


```


### Conclusione
La Separation of Concerns è un principio fondamentale nella progettazione del software che, quando applicato correttamente, può portare a codice più pulito, più mantenibile e più facile da estendere. Nel contesto di TypeScript e React, SoC aiuta a gestire la complessità dell'applicazione dividendo la logica di business dalla logica di presentazione e sfruttando pattern come la composizione e la distinzione tra componenti presentazionali e container.


## Composition Pattern

Il Composition Pattern è molto utilizzato nella programmazione React, permette di costruire componenti complessi componendo insieme componenti più semplici. Questo approccio è in linea con il principio filosofico di React che incoraggia la composizione piuttosto che l'ereditarietà. In TypeScript, questo pattern può essere applicato grazie ai tipi statici che aiutano a gestire le props e gli stati dei componenti.

### Esempio Base di Composition Pattern

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



## Compound Components
Il concetto di Compound Components è un pattern architetturale utilizzato nello sviluppo di interfacce utente, specialmente in librerie come React. Questo pattern consente di costruire componenti che lavorano insieme in modo armonico, mantenendo al contempo una separazione chiara e una logica ben definita. La filosofia alla base di questo modello è quella di creare una serie di componenti che condividono un contesto comune e comunicano tra loro per realizzare una funzionalità complessa, senza che il componente padre debba intervenire direttamente nella gestione dei dati o della logica tra questi componenti figli.

### Storia
Sebbene il concetto di Compound Components possa sembrare specifico per React, la sua origine è più antica e si basa sui principi fondamentali della programmazione orientata agli oggetti, come l'incapsulamento e la composizione. Tuttavia, è con l'ascesa di React e del suo modello basato sui componenti che questo pattern ha trovato una forte risonanza, poiché consente di sfruttare al meglio le caratteristiche di React come la composizione dei componenti e il passaggio di props per creare interfacce utente dinamiche e riutilizzabili.

### Esempio Pratico 1: Menu a Discesa (Dropdown)
Immagina di voler creare un menu a discesa personalizzabile. Potresti avere un componente Dropdown che funge da contenitore, un componente DropdownToggle che gestisce l'apertura e la chiusura del menu, e un componente DropdownMenu che contiene gli elementi (DropdownItem) del menu. Questi componenti lavorano insieme per fornire la funzionalità completa di un menu a discesa, ma sono separati e riutilizzabili in diversi contesti.


``` typescript

import React, { useState, ReactNode } from 'react';

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, setIsOpen });
        }
        return child;
      })}
    </div>
  );
};

interface DropdownToggleProps {
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ setIsOpen, children }) => {
  return <button onClick={() => setIsOpen(state => !state)}>{children}</button>;
};

interface DropdownMenuProps {
  isOpen: boolean;
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

interface DropdownItemProps {
  children: ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return <div>{children}</div>;
};


```

### Esempio Pratico 2: Variazione con Context API
Un'altra variazione del pattern di Compound Components può essere implementata utilizzando la Context API di React per evitare il passaggio esplicito di props tra componenti annidati, rendendo il codice più pulito e meno propenso agli errori.

``` typescript

import React, { useState, ReactNode, useContext } from 'react';

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined);

const Dropdown: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

const DropdownToggle: React.FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('DropdownToggle must be used within a Dropdown');
  }
  const { setIsOpen } = context;

  return <button onClick={() => setIsOpen(state => !state)}>{children}</button>;
};

const DropdownMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('DropdownMenu must be used within a Dropdown');
  }
  const { isOpen } = context;

  return isOpen ? <div>{children}</div> : null;
};

// `DropdownItem` rimane invariato rispetto all'esempio precedente e può essere utilizzato come componente figlio all'interno di `DropdownMenu`.


```

// `DropdownItem` rimane invariato e può essere utilizzato come nell'esempio precedente.

