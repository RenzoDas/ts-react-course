# Best Practices e Pattern


## Introduzione a Separation of Concerns (SoC)
La Separation of Concerns (SoC) è un principio di progettazione software che propone di suddividere un programma informatico in parti distinte, ognuna delle quali si occupa di una specifica preoccupazione (o "concern"). L'obiettivo è ridurre la complessità del software, facilitando la manutenzione, l'aggiornamento e la scalabilità. Questo principio è stato formulato per la prima volta da Edsger W. Dijkstra nel 1974, il quale sottolineava l'importanza di poter separare questioni differenti all'interno del software per gestirle indipendentemente.

### Utilizzi in Applicazioni Front-end e Back-end
Nel contesto delle applicazioni front-end, SoC si manifesta nella separazione tra la logica di presentazione (UI) e la logica di business. Questo si traduce in una distinzione chiara tra i componenti che gestiscono la visualizzazione (come i componenti di presentazione in React) e quelli che gestiscono lo stato e la logica applicativa (come i container o i servizi).

Per le applicazioni back-end, SoC implica la divisione dell'applicazione in diversi strati, come il livello di accesso ai dati, il livello di logica di business e il livello di presentazione (API). Questo facilita la gestione del codice e la possibilità di lavorare su parti specifiche dell'applicazione senza influenzare le altre.

### SoC in TypeScript + React: Esempi Pratici

**1. Componenti Container/Presentazionali in React**
Una delle applicazioni più comuni di SoC in React è la divisione tra componenti presentazionali e container. I componenti presentazionali sono responsabili della visualizzazione e ricevono dati come props, mentre i componenti container gestiscono la logica, lo stato e i dati da passare ai componenti presentazionali.

**Esempio**:

```typescript

// Componente Presentazionale
const UserList = ({ users }) => (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);

// Componente Container
class UserListContainer extends React.Component {
  state = { users: [] };

  componentDidMount() {
    fetchUsers().then(users => this.setState({ users }));
  }

  render() {
    return <UserList users={this.state.users} />;
  }
}

```

**2. Composition Pattern in React**

Il Composition Pattern sfrutta la composizione di componenti per riutilizzare la logica in modo flessibile. Al posto dell'ereditarietà, i componenti React possono utilizzare la composizione per condividere funzionalità, mantenendo separati i concern specifici.

**Esempio**:

```typescript

const withUserData = (WrappedComponent) => {
  return class extends React.Component {
    state = { users: [] };

    componentDidMount() {
      fetchUsers().then(users => this.setState({ users }));
    }

    render() {
      return <WrappedComponent users={this.state.users} {...this.props} />;
    }
  };
};

// Utilizzo del HOC per arricchire un componente presentazionale con i dati degli utenti
const UserListWithData = withUserData(UserList);

```

### Conclusione
La Separation of Concerns è un principio fondamentale nella progettazione del software che, quando applicato correttamente, può portare a codice più pulito, più mantenibile e più facile da estendere. Nel contesto di TypeScript e React, SoC aiuta a gestire la complessità dell'applicazione dividendo la logica di business dalla logica di presentazione e sfruttando pattern come la composizione e la distinzione tra componenti presentazionali e container.



