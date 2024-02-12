# Progetto finale

## Descrizione del Progetto: 
Visualizzazione dell'IP e Mappa di Localizzazione del Client

## Obiettivo:
Sviluppare un'applicazione web che identifica l'indirizzo IP del visitatore e visualizza la sua posizione geografica su una mappa utilizzando le API di IP2Location.io e OpenStreetMap.

## Requisiti Funzionali:

### Rilevamento dell'IP del Visitatore:

L'applicazione deve rilevare automaticamente l'indirizzo IP del visitatore non appena accede al sito.
Recupero Informazioni di Localizzazione:

Utilizzare l'indirizzo IP rilevato per richiedere informazioni di localizzazione (come latitudine, longitudine, città, stato, e paese) tramite le API di IP2Location.io.
Visualizzazione della Mappa:

Mostrare la posizione del visitatore su una mappa utilizzando OpenStreetMap, centrando la mappa sulla località ottenuta dalle API IP2Location.io.
Interfaccia Utente:

L'interfaccia utente deve essere intuitiva, con l'indirizzo IP visualizzato in un riquadro e la mappa in un altro, affiancati o uno sopra l'altro.
Fornire un meccanismo per aggiornare i dati (ad esempio, un pulsante "Aggiorna localizzazione") per permettere all'utente di rifare la query dell'IP e aggiornare la mappa.

## Requisiti Non Funzionali:

### Sicurezza:

Assicurarsi che la chiave API di IP2Location.io sia conservata in modo sicuro e non esposta pubblicamente nel codice client-side.

### Responsività:

L'applicazione deve essere responsive e funzionare correttamente su dispositivi mobile e desktop.

### Performance:

Ottimizzare le chiamate API e il caricamento della mappa per garantire una buona esperienza utente, minimizzando i tempi di attesa.

## Considerazioni Tecniche:

### Gestione delle API Key:

Valutare l'uso di variabili d'ambiente o configurazioni lato server per gestire le chiavi API in modo sicuro.
Accessibilità:

Assicurarsi che l'applicazione sia accessibile, seguendo le linee guida WCAG.

## Testing:

- Implementare test unitari e di integrazione per le funzionalità principali. Utilizzare framework di testing come Jest per i test unitari e Cypress o similari per i test end-to-end.
- Utilizzare Storybook per lo sviluppo visuale dei componenti UI: Integrare Storybook nel workflow di sviluppo per costruire e testare i componenti dell'interfaccia utente in isolamento.

## Deployment:

Prevedere un piano di deployment, possibilmente utilizzando piattaforme come Netlify, Vercel, o un server cloud, per facilitare l'accesso e la scalabilità dell'applicazione.

# Installazione di storybook

Apri un terminale nella radice del tuo progetto e esegui il comando seguente per installare Storybook e il suo preset per Vite, assicurandoti di usare pnpm se il progetto è configurato per utilizzare pnpm come gestore di pacchetti:

```bash
pnpm add -D @storybook/react @storybook/builder-vite @storybook/addon-links @storybook/addon-essentials @storybook/addon-interactions @storybook/testing-library
```

Dopo aver installato le dipendenze necessarie, inizializza Storybook nel tuo progetto eseguendo:

```bash
npx storybook init --builder @storybook/builder-vite
```

Dovrai creare o modificare alcuni file di configurazione per ottimizzare l'integrazione di Vite con Storybook. Ecco i passaggi chiave:

**Creazione del file .storybook/main.js**
Assicurati che il file .storybook/main.js (o .storybook/main.ts se preferisci usare TypeScript) includa il builder di Vite e qualsiasi altro addon necessario. Ecco un esempio di configurazione:

```typescript
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, { configType }) {
    // Personalizza la configurazione di Vite qui
    return config;
  },
};
```

Una volta completata la configurazione, puoi avviare Storybook per vedere la tua UI in azione. Esegui il seguente comando per avviare Storybook:

```bash
pnpm storybook
```



## Brief di Progetto: Visualizzazione di Posizione IP su Mappa Interattiva

Obiettivi:

1. Recupero dati IP:
	- Implementare una funzione che interroga l'API ip2location.io per ottenere la latitudine e la longitudine dell'utente in base al suo indirizzo IP.
	- Gestire eventuali errori di rete o di risposta API.

2. Visualizzazione su mappa:

	- Integrare la libreria React-Leaf per creare una mappa interattiva.
	- Centrare la mappa sulla posizione dell'utente recuperata dall'API.
	- Aggiungere un marker sulla mappa per indicare la posizione dell'utente.

3. Sviluppo in TypeScript:

	- Applicare i principi di TypeScript per una codifica robusta e tipizzata.
	- Definire interfacce per i dati API e lo stato dell'applicazione.
	- Implementare la gestione dei tipi per garantire la coerenza dei dati.

4. Test con Jest e React Testing Library:

	- Scrivere unit test per le funzioni di recupero dati e di rendering della mappa.
	- Testare l'interfaccia utente con React Testing Library.

5. Documentazione (opzionale):

	- Creare una documentazione completa del progetto, includendo README, diagrammi di flusso e spiegazioni del codice.

Tecnologie:

- React
- Vite
- TypeScript
- React-Leaf
- ip2location.io API
- Jest
- React Testing Library

Fasi di sviluppo:

1. Progettazione e pianificazione:

	- Definire l'architettura del componente e le interfacce.
	- Progettare l'interfaccia utente della mappa.

2. Implementazione:

	- Sviluppare la funzione di recupero dati IP.
	- Integrare React-Leaf e creare la mappa interattiva.
	- Collegare la posizione dell'utente alla mappa.

3. Test e debug:

	- Scrivere unit test per le funzionalità.
	- Testare l'interfaccia utente e correggere eventuali bug.

4. Documentazione:

	- Creare la documentazione del progetto.

5. Competenze avanzate TypeScript:

	- Generics per la gestione di dati di tipo diverso.
	- Tipi condizionali per ottimizzare il codice.
	- Funzioni di ordine superiore per astrazione e riutilizzo.

6. Presentazione con Storybook:

	- Creare diverse storie per mostrare le funzionalità dell'app.
	- Sfruttare i controlli di Storybook per testare diverse variabili.

7. Deliverable:

	- Applicazione React completa con due componenti:
		- Uno per il recupero dati IP.
		- Uno per la visualizzazione su mappa con React-Leaf.
	- Documentazione completa del progetto.

8. Bonus:

Implementare la memorizzazione cache dei dati IP per migliorare le prestazioni.
Aggiungere funzionalità di zoom e interazione sulla mappa.
Personalizzare l'interfaccia utente della mappa.


