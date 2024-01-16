###

# Fondamenti di JavaScript

## Introduzione al JavaScript

JavaScript, originariamente noto come LiveScript, è stato sviluppato da Brendan Eich di Netscape nel lontano 1995. È diventato rapidamente uno dei pilastri del web, insieme a HTML e CSS, permettendo la creazione di siti web dinamici e interattivi. Oggi, JavaScript è utilizzato non solo nei browser, ma anche in applicazioni server-side attraverso Node.js, e in una varietà di altri ambienti.

# Che cos'è ECMAScript?

ECMAScript è uno standard di scripting languages sviluppato e mantenuto da Ecma International attraverso il comitato tecnico TC39. È stato creato per standardizzare JavaScript, per aiutare a promuovere la sua coesistenza con altri linguaggi di scripting e per garantire che il linguaggio si sviluppi in modo compatibile con i futuri standard web.

## Storia e Sviluppo

- **JavaScript e ECMAScript:** Con il crescente successo di Javascript, si è sentita la necessità di una standardizzazione. ECMAScript è stato quindi introdotto nel 1997 per standardizzare JavaScript e assicurare l'interoperabilità tra diverse piattaforme web.

- **Edizioni di ECMAScript:** Da allora, ECMAScript è stato aggiornato con diverse edizioni. La più significativa è stata ECMAScript 5 (ES5), rilasciata nel 2009, e ECMAScript 2015 (conosciuto anche come ES6), che ha introdotto numerose nuove funzionalità come classi, moduli, arrow functions, e altro.

## Importanza di ECMAScript

1. **Standardizzazione:** ECMAScript fornisce una specifica standard che i browser e altri ambienti JavaScript possono implementare. Ciò garantisce che il codice JavaScript scritto per un browser funzioni allo stesso modo in un altro.

2. **Evoluzione del Linguaggio:** Con ogni nuova edizione, ECMAScript introduce miglioramenti e nuove funzionalità che aiutano gli sviluppatori a scrivere codice più efficiente e leggibile.

3. **Compatibilità Futura:** Le modifiche e le aggiunte a ECMAScript vengono fatte tenendo conto della compatibilità con le versioni precedenti, garantendo che il codice scritto oggi continuerà a funzionare in futuro.

4. **Influenza su Altri Linguaggi:** Molti linguaggi moderni che si compilano in JavaScript, come TypeScript, sono fortemente influenzati da ECMAScript, adottando molte delle sue convenzioni e funzionalità.

## Variabili in JavaScript

In JavaScript, le variabili sono usate per memorizzare dati che possono variare nel tempo. Ci sono tre modi per dichiarare una variabile:

1. **let:** Introdotto in ES6 (ECMAScript 2015), `let` permette di dichiarare variabili limitate al blocco di codice in cui vengono usate, a una variable dichiarata usando `let` le si può assegnare un nuovo valore in qualsiasi momento.

2. **const:** Anche questo introdotto in ES6, `const` è utilizzato per dichiarare variabili il cui valore non dovrebbe cambiare.

3. **var:** Il modo più vecchio per dichiarare variabili. È sconsigliato a causa del suo ambito funzionale piuttosto che blocco, e per il suo comportamento di "hoisting" (le dichiarazioni var vengono spostate in cima al blocco).

### Perché `var` è Deprecato?

`var` è considerato deprecato per diverse ragioni:

- **Ambito Funzionale:** `var` ha uno scope (ambito) funzionale, il che significa che può apparire al di fuori dei blocchi in cui è stato definito, portando a potenziali errori e comportamenti imprevisti.
- **Hoisting:** Le variabili dichiarate con `var` vengono issate (o sollevate) all'inizio del loro ambiente di esecuzione. Questo può causare confusione e bug difficili da rilevare.

## Tipi di Dati

JavaScript è un linguaggio di tipizzazione dinamica, ma supporta diversi tipi di dati:

- **Stringhe:** Utilizzate per rappresentare testo. Possono essere definite con singole virgolette (`'`), doppie virgolette (`"`), o backticks (`` ` ``). Le backticks permettono l'interpolazione di stringhe e la creazione di template literals.

  Esempi:

  ```javascript
  let saluto = "Ciao";
  let domanda = "Come stai?";
  let frase = `Il saluto è: ${saluto}`;
  ```

- **Numeri:** Includono sia numeri interi che decimali. JavaScript usa il tipo Number per tutti i numeri.

  Esempio:

  ```javascript
  let intero = 10;
  let decimale = 3.14;
  ```

- **Booleani:** Rappresentano un valore logico vero o falso.

  Esempio:

  ```javascript
  let vero = true;
  let falso = false;
  ```

- **Oggetti:** Collezioni di proprietà.

  Esempio:

  ```javascript
  let persona = { nome: "Luca", età: 30 };
  ```

- **Undefined e Null:** `undefined` indica che una variabile non è stata inizializzata. `null` è usato per rappresentare l'assenza di un valore.

## Operatori

JavaScript include una vasta gamma di operatori:

- **Operatori Aritmetici:** `+`, `-`, `*`, `/`, `%` per le operazioni matematiche.
- **Operatori di Assegnazione:** `=`, `+=`, `-=`, `*=`, `/=` per assegnare valori.
- **Operatori di Confronto:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` per confrontare valori.
- **Operatori Logici:** `&&` (and), `||` (or), `!` (not) per operazioni logiche.

---
