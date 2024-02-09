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
