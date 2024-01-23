# Introduzione a TypeScript

### Cos'è TypeScript?

TypeScript è un linguaggio di programmazione open-source sviluppato e mantenuto da Microsoft. È un superset di JavaScript, il che significa che qualsiasi codice JavaScript è anche un codice TypeScript valido. TypeScript estende JavaScript aggiungendo tipi statici.

Con TypeScript, gli sviluppatori possono scrivere codice più pulito e comprensibile, e possono catturare errori prima dell'esecuzione, durante la fase di sviluppo.

### Perché Usare TypeScript?

- **Tipizzazione Stabile:** TypeScript aggiunge una tipizzazione statica opzionale a JavaScript, permettendo di catturare errori di tipo in fase di sviluppo.
- **Supporto IDE Migliorato:** L'uso dei tipi permette agli ambienti di sviluppo integrati (IDE) di fornire un'esperienza più ricca, con funzionalità come il completamento automatico del codice e il refactoring.
- **Facilita la Manutenzione del Codice:** In progetti di grandi dimensioni, TypeScript facilita la manutenzione e la comprensione del codice.
- **Compatibilità con JavaScript:** TypeScript si compila in JavaScript, rendendolo compatibile con tutti i browser e ambienti JavaScript.
- **Comunità in Crescita:** TypeScript ha guadagnato una grande popolarità e supporto dalla comunità, con molte librerie e framework che offrono tipizzazioni TypeScript.

### Come Funziona TypeScript?

TypeScript si basa sulla scrittura di file `.ts` o `.tsx` (per progetti che utilizzano JSX come React). Questi file vengono poi "compilati" in file JavaScript standard. Il compilatore TypeScript, che può essere eseguito tramite Node.js, analizza il codice e segnala eventuali errori di tipo prima di eseguire la compilazione.

### Installazione di TypeScript

Per iniziare con TypeScript, è necessario installare il pacchetto TypeScript tramite NPM (Node Package Manager). Questo può essere fatto con il seguente comando:

```bash
npm install -g typescript
```

Dopo l'installazione, è possibile compilare un file TypeScript usando:

```bash
tsc nome-del-file.ts
```

### Esempio di Codice TypeScript

Ecco un semplice esempio di come appare un codice TypeScript:

```typescript
function saluta(nome: string): string {
  return `Ciao, ${nome}!`
}

let utente = "Alice"
console.log(saluta(utente))
```

In questo esempio, la funzione `saluta` è esplicitamente tipizzata per accettare un parametro `nome` di tipo `string` e restituire una `string`.

---

<br>

# Configurazione dell'Ambiente per TypeScript

### Panoramica

Per iniziare a sviluppare con TypeScript, è fondamentale configurare correttamente l'ambiente di sviluppo. Questo include l'installazione di Node.js, npm (Node Package Manager) e il compilatore TypeScript.

### Passaggi per la Configurazione

#### Installazione di Node.js e npm

1. **Scarica Node.js:** Visita il [sito ufficiale di Node.js](https://nodejs.org/) e scarica l'ultima versione stabile.
2. **Installazione:** Segui le istruzioni di installazione per il tuo sistema operativo.
3. **Verifica dell'Installazione:** Apri un terminale o prompt dei comandi e digita `node -v` e `npm -v` per verificare che Node.js e npm siano installati correttamente.

#### Installazione di TypeScript

1. **Installazione Globale di TypeScript:** Esegui `npm install -g typescript` nel terminale. L'opzione `-g` installa TypeScript globalmente, permettendoti di usarlo in qualsiasi progetto.
2. **Verifica dell'Installazione:** Esegui `tsc -v` per verificare che il compilatore TypeScript sia stato installato correttamente.

### Configurazione del Progetto TypeScript

1. **Crea una Nuova Directory:** Crea una directory per il tuo progetto TypeScript e naviga in quella directory nel terminale.
2. **Inizializzazione del Progetto:** Esegui `npm init` per creare un file `package.json`, che gestirà le dipendenze del progetto.
3. **Creazione del File di Configurazione TypeScript:** Esegui `tsc --init` per generare un file `tsconfig.json`, che contiene le impostazioni del compilatore TypeScript.

### Personalizzazione di tsconfig.json

Il file `tsconfig.json` permette di personalizzare come il codice TypeScript viene compilato. Alcune delle impostazioni comuni includono:

- `target`: Specifica la versione ECMAScript di destinazione per il codice JavaScript compilato (es: `es5`, `es6`).
- `module`: Imposta il sistema di moduli (es: `commonjs`, `es2015`).
- `strict`: Abilita una stretta verifica dei tipi.
- `outDir`: Specifica la directory in cui salvare i file JavaScript compilati.
- `include` e `exclude`: Definiscono quali file includere o escludere dalla compilazione.

### Strumenti di Sviluppo (IDE)

Gli Integrated Development Environments (IDE) come Visual Studio Code sono altamente raccomandati per lo sviluppo TypeScript. Offrono supporto integrato per TypeScript, inclusi evidenziazione della sintassi, suggerimenti di codice e rilevamento degli errori in tempo reale.

### Esempio di File TypeScript

Crea un file con estensione `.ts` (es: `main.ts`) e scrivi del codice TypeScript. Esempio:

```typescript
let messaggio: string = "Benvenuto in TypeScript"
console.log(messaggio)
```

### Compilazione e Esecuzione

1. **Compilazione:** Esegui `tsc nome-del-file.ts` per compilare il file TypeScript in JavaScript.
2. **Esecuzione:** Esegui il file JavaScript risultante con Node.js usando `node nome-del-file.js`.

---

<br>

# Tipi di Base in TypeScript

TypeScript offre diversi tipi di base che aiutano a definire chiaramente la natura dei valori che possono essere utilizzati nel codice. Ecco una panoramica dei tipi di base più comuni.

### String

Il tipo `string` rappresenta sequenze di caratteri. Può essere usato per lavorare con testo.

```typescript
let nome: string = "Alice"
console.log(nome)
```

### Number

Il tipo `number` rappresenta sia numeri interi che numeri a virgola mobile.

```typescript
let età: number = 30
let punteggio: number = 85.5
```

### Boolean

Il tipo `boolean` rappresenta valori logici: `true` e `false`.

```typescript
let èStudente: boolean = true
```

### Array

TypeScript supporta array di elementi dello stesso tipo. Gli array possono essere definiti in due modi: usando il tipo seguito da `[]` o utilizzando un generico `Array<tipo>`.

```typescript
let numeri: number[] = [1, 2, 3]
let nomi: Array<string> = ["Alice", "Bob", "Charlie"]
```

### Tuple

Il tipo `tuple` permette di esprimere un array con un numero fisso di elementi i cui tipi sono noti, ma non necessariamente uguali.

```typescript
let persona: [string, number] = ["Alice", 30]
```

### Enum

Un `enum` è un modo per dare nomi più amichevoli a un set di valori numerici.

```typescript
enum Color {
  Rosso,
  Verde,
  Blu,
}
let c: Color = Color.Verde
```

### Any

Il tipo `any` può essere qualsiasi cosa, permettendo di evitare il controllo dei tipi da parte del compilatore TypeScript. È utile quando si lavora con parti di codice non tipizzate.

```typescript
let nonSicuro: any = 4
nonSicuro = "Forse una stringa?"
nonSicuro = false
```

### Void

Il tipo `void` è utilizzato per indicare l'assenza di un tipo, spesso usato come tipo di ritorno per funzioni che non restituiscono nulla.

```typescript
function logMessaggio(): void {
  console.log("Questo è un messaggio di log")
}
```

### Null e Undefined

TypeScript ha tipi `null` e `undefined` che funzionano in modo simile ai loro omologhi in JavaScript. Di solito non sono utilizzati direttamente come in altri linguaggi.

```typescript
let u: undefined = undefined
let n: null = null
```

### Conclusioni

Questi sono i tipi di base in TypeScript. La conoscenza di questi tipi è fondamentale per scrivere codice TypeScript chiaro e corretto. Utilizzare correttamente i tipi aiuta a evitare molti errori comuni in fase di sviluppo e a rendere il codice più leggibile e manutenibile.

---

<br>

# Interfacce in TypeScript

Le interfacce in TypeScript sono un potente modo di definire contratti all'interno del tuo codice e di definire tipi personalizzati che possono essere riutilizzati.

### Cosa sono le Interfacce?

Un'interfaccia in TypeScript è una struttura che definisce la forma di un oggetto. Può includere una combinazione di proprietà e funzioni (metodi). Le interfacce sono utilizzate per definire oggetti con requisiti specifici.

### Sintassi di Base

Ecco come definire un'interfaccia semplice:

```typescript
interface Persona {
  nome: string
  età: number
}
```

### Implementazione di un'Interfaccia

Per utilizzare un'interfaccia, puoi assegnare il tipo definito dall'interfaccia a una variabile.

```typescript
let studente: Persona = { nome: "Alice", età: 25 }
```

### Interfacce con Proprietà Opzionali

Le interfacce possono avere proprietà opzionali, contrassegnate con un punto interrogativo `?`.

```typescript
interface Automobile {
  marca: string
  modello: string
  anno?: number // Proprietà opzionale
}

let miaAuto: Automobile = { marca: "Toyota", modello: "Corolla" }
```

### Interfacce e Metodi

Puoi definire funzioni all'interno di un'interfaccia. Questo costringe l'oggetto a implementare specifici metodi.

```typescript
interface Animale {
  nome: string
  emettiSuono(): string
}

let mioCane: Animale = {
  nome: "Fido",
  emettiSuono: () => "Bau Bau",
}
```

### Estensione delle Interfacce

Le interfacce possono estendere altre interfacce, permettendo la composizione e il riutilizzo.

```typescript
interface Lavoratore {
  id: number
  nome: string
}

interface Manager extends Lavoratore {
  dipartimento: string
}

let capo: Manager = { id: 1, nome: "Alice", dipartimento: "Sviluppo" }
```

### Interfacce per Funzioni

Le interfacce possono essere usate per definire tipi di funzione.

```typescript
interface Ricerca {
  (sorgente: string, sottostringa: string): boolean
}

let miaRicerca: Ricerca
miaRicerca = function (src: string, sub: string): boolean {
  return src.search(sub) > -1
}
```

### Interfacce per Array

Puoi anche usare interfacce per definire un tipo per gli array.

```typescript
interface StringArray {
  [index: number]: string
}

let mieiArray: StringArray
mieiArray = ["Bob", "Fred"]
```

### Conclusione

Le interfacce in TypeScript sono uno strumento fondamentale per la creazione di codice chiaro, coerente e riutilizzabile. Offrono un modo per definire la struttura degli oggetti, funzioni, e array, assicurando che le diverse parti del tuo codice siano compatibili tra loro e facilmente manutenibili.

---

<br>

# Classi in TypeScript

Le classi in TypeScript forniscono un modo più chiaro e conciso per creare oggetti e gestire l'ereditarietà, simile a come le classi sono usate in altri linguaggi di programmazione orientati agli oggetti come Java o C#.

### Sintassi di Base

La sintassi di base per dichiarare una classe in TypeScript è simile a quella di JavaScript ES6.

```typescript
class Persona {
  nome: string
  età: number

  constructor(nome: string, età: number) {
    this.nome = nome
    this.età = età
  }

  saluta() {
    return `Ciao, il mio nome è ${this.nome}`
  }
}

let persona = new Persona("Alice", 30)
console.log(persona.saluta())
```

### Ereditarietà

TypeScript supporta l'ereditarietà, permettendo alle classi di ereditare proprietà e metodi da altre classi.

```typescript
class Studente extends Persona {
  corso: string

  constructor(nome: string, età: number, corso: string) {
    super(nome, età)
    this.corso = corso
  }

  salutaStudente() {
    return `${this.saluta()} e studio ${this.corso}`
  }
}

let studente = new Studente("Bob", 20, "Informatica")
console.log(studente.salutaStudente())
```

### Modificatori di Accesso

TypeScript introduce i modificatori di accesso `public`, `private`, e `protected` che controllano l'accesso alle proprietà e ai metodi di una classe.

- **Public**: Le proprietà e i metodi sono accessibili da ovunque. È il valore predefinito.
- **Private**: Le proprietà e i metodi sono accessibili solo all'interno della classe che li definisce.
- **Protected**: Le proprietà e i metodi sono accessibili all'interno della classe e delle classi derivate.

```typescript
class Animale {
  private nome: string

  constructor(nome: string) {
    this.nome = nome
  }

  getNome(): string {
    return this.nome
  }
}

let mioAnimale = new Animale("Leone")
console.log(mioAnimale.getNome()) // OK
// console.log(mioAnimale.nome); // Errore: 'nome' è privato.
```

### Proprietà Readonly

Le proprietà readonly possono essere assegnate una volta e non possono essere modificate.

```typescript
class Automobile {
  readonly marca: string

  constructor(marca: string) {
    this.marca = marca
  }
}

let miaAuto = new Automobile("Toyota")
// miaAuto.marca = "Ford"; // Errore: non è possibile modificare una proprietà readonly.
```

### Proprietà e Metodi Statici

Le classi possono avere proprietà e metodi statici, che appartengono alla classe stessa piuttosto che a qualsiasi oggetto istanziato.

```typescript
class Helper {
  static numeroPi: number = 3.14

  static calcolaCirconferenza(diametro: number): number {
    return this.numeroPi * diametro
  }
}

console.log(Helper.calcolaCirconferenza(10))
```

### Conclusione

Le classi in TypeScript forniscono una struttura chiara e concisa per creare oggetti e gestire l'ereditarietà. I modificatori di accesso e le proprietà readonly aggiungono un ulteriore livello di controllo sulla struttura della classe, rendendo il codice più sicuro e facile da mantenere.

---

<br>

# Funzioni in TypeScript

Le funzioni in TypeScript sono simili alle funzioni in JavaScript, ma con l'aggiunta della tipizzazione, che permette una maggiore chiarezza e affidabilità.

### Sintassi di Base

Una funzione in TypeScript può avere tipi specificati per i suoi parametri e per il valore di ritorno.

```typescript
function somma(a: number, b: number): number {
  return a + b
}

let risultato = somma(10, 20)
console.log(risultato)
```

### Parametri Opzionali

In TypeScript, i parametri delle funzioni possono essere resi opzionali con l'uso del `?`. Se un parametro è opzionale, può essere omesso.

```typescript
function saluta(nome: string, cognome?: string): string {
  return cognome ? `Ciao, ${nome} ${cognome}` : `Ciao, ${nome}`
}

console.log(saluta("Alice")) // Ciao, Alice
console.log(saluta("Alice", "Rossi")) // Ciao, Alice Rossi
```

### Parametri Predefiniti

TypeScript permette di impostare valori predefiniti per i parametri delle funzioni.

```typescript
function creaMessaggio(saluto: string, nome: string = "visitatore"): string {
  return `${saluto}, ${nome}!`
}

console.log(creaMessaggio("Benvenuto")) // Benvenuto, visitatore!
console.log(creaMessaggio("Benvenuto", "Alice")) // Benvenuto, Alice!
```

### Rest Parameters

I rest parameters permettono di passare un numero variabile di argomenti a una funzione. Sono trattati come un array all'interno della funzione.

```typescript
function sommaNumeri(...numeri: number[]): number {
  return numeri.reduce((a, b) => a + b, 0)
}

console.log(sommaNumeri(1, 2, 3, 4, 5)) // 15
```

### Funzioni Arrow

Le funzioni arrow (o lambda) in TypeScript sono molto simili a quelle in JavaScript, fornendo una sintassi breve e un comportamento coerente del `this`.

```typescript
let moltiplica = (a: number, b: number): number => a * b
console.log(moltiplica(5, 2)) // 10
```

### Tipi di Funzione

È possibile definire un tipo per una funzione. Questo assicura che qualsiasi funzione assegnata a quel tipo abbia la stessa firma.

```typescript
type Operazione = (x: number, y: number) => number

let sottrai: Operazione = (a, b) => a - b
console.log(sottrai(10, 5)) // 5
```

### Overload delle Funzioni

TypeScript supporta l'overload delle funzioni, permettendo di avere più firme della funzione per supportare diversi tipi di parametri o numeri di parametri.

```typescript
function getInfo(valore: string): string
function getInfo(valore: number): number
function getInfo(valore: string | number): string | number {
  if (typeof valore === "string") {
    return `Stringa: ${valore}`
  } else {
    return `Numero: ${valore}`
  }
}

console.log(getInfo("Alice")) // Stringa: Alice
console.log(getInfo(123)) // Numero: 123
```

### Conclusione

Le funzioni in TypeScript offrono una grande flessibilità e potenza, permettendo di scrivere codice chiaro e ben tipizzato. La tipizzazione e gli overload aggiungono un ulteriore livello di sicurezza, assicurando che le funzioni vengano utilizzate nel modo previsto.

---

<br>

# Generics in TypeScript

I Generics in TypeScript sono uno strumento che permette di creare componenti che possono lavorare con vari tipi piuttosto che un singolo tipo. Questo aumenta la riusabilità e la flessibilità del codice.

### Concetto di Base dei Generics

I Generics permettono di definire una funzione, una classe o un'interfaccia con un segnaposto per il tipo, che poi può essere specificato quando il componente viene utilizzato.

### Esempio di Funzione Generica

Un esempio classico è una funzione che restituisce l'elemento di un array.

```typescript
function primoElemento<T>(arr: T[]): T {
  return arr[0]
}

let numeri = [1, 2, 3]
let primoNumero = primoElemento(numeri) // primoNumero è di tipo 'number'

let nomi = ["Alice", "Bob", "Charlie"]
let primoNome = primoElemento(nomi) // primoNome è di tipo 'string'
```

In questo esempio, `<T>` rappresenta un tipo generico che verrà determinato all'atto della chiamata della funzione.

### Generics nelle Interfacce e Classi

I Generics possono essere utilizzati anche nelle interfacce e nelle classi.

```typescript
interface Coppia<T, U> {
  primo: T
  secondo: U
}

let coppia: Coppia<string, number> = { primo: "età", secondo: 30 }
```

### Vincoli sui Generics

È possibile definire vincoli sui Generics per limitare i tipi che possono essere usati.

```typescript
interface Lunghezza {
  length: number
}

function logLunghezza<T extends Lunghezza>(arg: T): T {
  console.log(arg.length)
  return arg
}

logLunghezza("Ciao Mondo") // OK
logLunghezza([1, 2, 3]) // OK
// logLunghezza(3); // Errore: il numero non ha una proprietà 'length'
```

### Generics e Factory Functions

I Generics sono utili anche nelle factory functions per creare istanze di classi.

```typescript
function creaArray<T>(elemento: T, volte: number): T[] {
  return new Array(volte).fill(elemento)
}

let arrayDiStringhe = creaArray("ripeti", 3) // ["ripeti", "ripeti", "ripeti"]
```

### Utilizzo dei Generics per Migliorare la Tipizzazione

L'utilizzo dei Generics aiuta a rendere il codice più sicuro e flessibile, assicurando che le funzioni e le classi possano lavorare con diversi tipi mantenendo comunque una tipizzazione forte.

### Conclusione

I Generics sono uno strumento essenziale in TypeScript, fornendo la flessibilità necessaria per lavorare con diversi tipi, mantenendo al contempo la sicurezza e la coerenza della tipizzazione. Consentono di costruire componenti più robusti e riutilizzabili.

---

<br>

# Tipi Union e Intersection in TypeScript

In TypeScript, i tipi Union e Intersection offrono modi flessibili per combinare tipi. Questi costrutti consentono di creare tipi complessi e versatili che possono adattarsi a diverse situazioni.

### Tipi Union

Un tipo Union, indicato dall'operatore `|`, può contenere un valore di uno di diversi tipi specificati. È utile quando una variabile può essere di più di un tipo.

#### Sintassi di Base

```typescript
let id: number | string

id = 101 // Valido
id = "202" // Valido
// id = true; // Errore: il tipo 'boolean' non è assegnabile a 'number | string'
```

#### Union con Tipi Diversi

```typescript
function stampaId(id: number | string) {
  console.log(`ID: ${id}`)
}

stampaId(101) // ID: 101
stampaId("202") // ID: 202
```

#### Union e Type Guard

Le Type Guard possono essere utilizzate per verificare il tipo di un union in un blocco di codice.

```typescript
function isNumber(x: any): x is number {
  return typeof x === "number"
}

function isString(x: any): x is string {
  return typeof x === "string"
}

function stampaId(id: number | string) {
  if (isNumber(id)) {
    console.log(`Numero ID: ${id.toFixed()}`)
  } else if (isString(id)) {
    console.log(`Stringa ID: ${id.toUpperCase()}`)
  }
}
```

### Tipi Intersection

Un tipo Intersection, indicato dall'operatore `&`, combina più tipi in uno. È utilizzato quando si desidera che un tipo abbia tutte le proprietà di altri tipi.

#### Sintassi di Base

```typescript
interface Nome {
  nome: string
}

interface Eta {
  età: number
}

let persona: Nome & Eta = { nome: "Alice", età: 30 }
```

#### Esempio con Tipi Complessi

```typescript
interface Lavoratore {
  id: number
  nome: string
}

interface Manager {
  dipartimento: string
  convocaRiunione(): void
}

type Direttore = Lavoratore & Manager

let direttore: Lavoratore & Manager = {
  id: 1,
  nome: "Bob",
  dipartimento: "IT",
  convocaRiunione: () => {
    /* Implementazione */
  },
}
```

### Conclusione

I tipi Union e Intersection in TypeScript forniscono un modo potente per combinare e manipolare tipi. Consentono agli sviluppatori di creare strutture di dati complesse e specifiche, migliorando la sicurezza e la flessibilità del codice.

---

<br>

# Namespaces e Moduli in TypeScript

In TypeScript, i Namespaces e i Moduli sono due concetti distinti ma correlati, utilizzati per organizzare e incapsulare il codice.

### Namespaces

I Namespaces, precedentemente noti come "moduli interni", sono un modo per raggruppare funzioni, classi, interfacce e altri tipi sotto un nome comune. Sono utili per evitare conflitti di nomi nello spazio globale.

#### Sintassi di Base

```typescript
namespace Matematica {
  export function somma(x: number, y: number): number {
    return x + y
  }

  export function moltiplica(x: number, y: number): number {
    return x * y
  }
}

let risultato = Matematica.somma(5, 10)
```

#### Accesso ai Membri del Namespace

I membri di un namespace devono essere esportati (`export`) per renderli accessibili al di fuori del namespace stesso.

### Moduli

I moduli in TypeScript, simili ai moduli ES6 in JavaScript, forniscono un meccanismo per dividere il codice in file separati. Ogni modulo può esportare variabili, funzioni, classi e interfacce che possono essere importate da altri moduli.

#### Esempio di Modulo

```typescript
// matematica.ts
export function somma(x: number, y: number): number {
  return x + y
}

export function moltiplica(x: number, y: number): number {
  return x * y
}
```

```typescript
// main.ts
import { somma, moltiplica } from "./matematica"

let risultatoSomma = somma(5, 10)
let risultatoMoltiplica = moltiplica(5, 10)
```

#### Vantaggi dei Moduli

- **Incapsulamento:** I moduli promuovono l'incapsulamento del codice e la separazione delle preoccupazioni.
- **Riutilizzo:** I moduli possono essere riutilizzati in diverse parti dell'applicazione o in diversi progetti.
- **Gestione delle Dipendenze:** I moduli permettono una gestione chiara delle dipendenze.

### Differenze tra Namespaces e Moduli

- **Scope:** I Namespaces sono disponibili globalmente se includi il file nel tuo progetto. I moduli invece incapsulano le loro esportazioni e richiedono un'importazione esplicita.
- **File:** I Namespaces possono essere definiti in un singolo file o distribuiti su più file. I moduli corrispondono generalmente a un singolo file.
- **Utilizzo:** I Namespaces sono più utilizzati in applicazioni senza un sistema di moduli, mentre i moduli sono la scelta standard per la maggior parte delle applicazioni TypeScript moderne.

### Conclusione

I Namespaces e i Moduli sono strumenti fondamentali in TypeScript per organizzare il codice. Mentre i Namespaces possono essere utili in determinati scenari, l'uso di moduli è generalmente preferito nelle applicazioni moderne per la loro capacità di incapsulare e gestire meglio il codice.

---

<br>

# Type Literals e Type Aliases in TypeScript

In TypeScript, i type literals e i type aliases offrono ulteriori modi per dichiarare e utilizzare i tipi, permettendo una maggiore specificità e flessibilità nel tuo codice.

### Tipi Literal

I tipi literal consentono di definire tipi che accettano un valore specifico. Possono essere utilizzati con stringhe, numeri e booleani.

#### Sintassi di Base

```typescript
let vero: true
vero = true // Valido
// vero = false; // Errore: il tipo 'false' non è assegnabile a 'true'

let uno: 1
uno = 1 // Valido
// uno = 2; // Errore: il tipo '2' non è assegnabile a '1'
```

#### Tipi Literal con Union

Puoi combinare più tipi literal usando un union per creare un tipo che accetta un insieme limitato di valori.

```typescript
type Stato = "attivo" | "inattivo" | "sospeso"

let statoUtente: Stato
statoUtente = "attivo" // Valido
// statoUtente = "eliminato"; // Errore: il tipo '"eliminato"' non è assegnabile a 'Stato'
```

### Type Aliases

Un type alias in TypeScript è un nome dato a un tipo esistente. Può essere utilizzato per creare nomi più descrittivi per tipi complessi o per semplificare la modifica di tipi in futuro.

#### Sintassi di Base

```typescript
type StringNumerico = string

let mioNumero: StringNumerico
mioNumero = "123"
```

#### Type Alias con Union e Intersection

```typescript
type Punto = {
  x: number
  y: number
}

type Punto3D = Punto & { z: number }

let mioPunto3D: Punto3D = { x: 0, y: 0, z: 10 }
```

#### Type Alias e Generics

```typescript
type Lista<T> = T[]

let listaNumeri: Lista<number> = [1, 2, 3]
let listaStringhe: Lista<string> = ["uno", "due", "tre"]
```

### Conclusione

I tipi literal e i type aliases sono strumenti utili in TypeScript per creare tipi più descrittivi e flessibili. I tipi literal permettono di restringere i valori che un tipo può accettare, mentre i type aliases offrono un modo per dare nomi più significativi ai tipi esistenti o per creare tipi complessi in modo più leggibile.

---

<br>

# Type Assertions in TypeScript

Le Type Assertions in TypeScript offrono un modo per dire al compilatore "tratta questa variabile come un tipo specifico". Sono simili al casting di tipi in altri linguaggi di programmazione, ma non influenzano il runtime, poiché servono solo come un suggerimento per il compilatore.

### Sintassi delle Type Assertions

Ci sono due sintassi per le type assertions in TypeScript:

1. **Sintassi "angle-bracket"**:

   ```typescript
   let valore: any = "Questa è una stringa"
   let lunghezzaValore: number = (<string>valore).length
   ```

2. **Sintassi `as`**:

   ```typescript
   let valore: any = "Questa è una stringa"
   let lunghezzaValore: number = (valore as string).length
   ```

La scelta tra le due sintassi è spesso questione di preferenza, ma in JSX si deve utilizzare `as` poiché la sintassi con gli angle brackets può essere confusa con i tag JSX.

### Quando Usare le Type Assertions

Le Type Assertions sono utili quando conosci il tipo più specifico di un valore rispetto a quello che TypeScript è in grado di inferire. Alcuni casi comuni includono:

- **Lavorare con `any`:** Quando si lavora con tipi `any`, le type assertions possono specificare un tipo più preciso.

  ```typescript
  let dati: any = getData()
  let nome: string = (dati as string).toUpperCase()
  ```

- **Interazione con librerie JavaScript:** Quando si usa codice JavaScript esterno, le type assertions possono specificare tipi dove TypeScript non ha informazioni sufficienti.

- **Affinamento del Tipo:** In alcuni scenari, potresti sapere che una variabile è di un tipo più specifico di quello che il compilatore può dedurre.

  ```typescript
  let elemento = document.getElementById("myElement") as HTMLInputElement
  console.log(elemento.value)
  ```

### Precauzioni nell'Uso delle Type Assertions

- **Sovrascrivere il Compilatore:** Le Type Assertions sovrascrivono il controllo del compilatore. Usarle in modo errato può portare a bug difficili da rilevare.
- **Non sono Conversioni di Tipo:** Le Type Assertions non convertono i tipi nei valori. Se fai un'asserzione su un tipo che non è corretto, il codice potrebbe causare errori in fase di esecuzione.

### Conclusione

Le Type Assertions in TypeScript sono uno strumento utile per gestire i casi in cui sei più informato del compilatore riguardo al tipo di una variabile. Tuttavia, è importante usarle con cautela e solo quando sei sicuro del tipo di un valore per evitare errori a runtime.

---

<br>

# Controllo del Flusso e Tipizzazione Avanzata in TypeScript

TypeScript fornisce strumenti avanzati per il controllo del flusso e la tipizzazione che aiutano a gestire meglio la logica del codice e a garantire la correttezza dei tipi.

### Guardie di Tipo

Le guardie di tipo in TypeScript sono espressioni che eseguono un controllo in fase di esecuzione e restringono il tipo di una variabile in un blocco di codice.

#### Uso delle Guardie di Tipo

```typescript
function isString(test: any): test is string {
  return typeof test === "string"
}

function esempio(input: string | number) {
  if (isString(input)) {
    // Qui, 'input' è trattato come 'string'
    console.log(input.toUpperCase())
  } else {
    // Qui, 'input' è trattato come 'number'
    console.log(input.toFixed(2))
  }
}
```

### Operatori di Tipo

Gli operatori di tipo, come `typeof` e `instanceof`, sono utilizzati per verificare il tipo di un'istanza o di una variabile.

#### Esempio con `typeof` e `instanceof`

```typescript
class MyClass {
  // ...
}

let istanza = new MyClass()

if (istanza instanceof MyClass) {
  // Tipo restringito a 'MyClass'
}

let variabile: any = "test"
if (typeof variabile === "string") {
  // Tipo restringito a 'string'
}
```

### Tipi Discriminati

Un pattern comune in TypeScript è l'uso di tipi union con un campo comune che discrimina tra i tipi. Questo è noto come "tipo discriminato".

#### Esempio di Tipo Discriminato

```typescript
interface Cerchio {
  tipo: "cerchio"
  raggio: number
}

interface Quadrato {
  tipo: "quadrato"
  lato: number
}

type Figura = Cerchio | Quadrato

function area(figura: Figura) {
  switch (figura.tipo) {
    case "cerchio":
      return Math.PI * figura.raggio ** 2
    case "quadrato":
      return figura.lato ** 2
  }
}
```

### Tipi Avanzati

TypeScript permette di creare tipi avanzati usando union, intersection, tipi condizionali, e tipi mappati.

#### Esempio di Tipo Condizionale

```typescript
type isString<T> = T extends string ? "Sì" : "No"

type TestStringa = isString<string> // "Sì"
type TestNumero = isString<number> // "No"
```

### Conclusione

Il controllo del flusso e la tipizzazione avanzata in TypeScript offrono strumenti potenti per scrivere codice più sicuro e manutenibile. L'uso di guardie di tipo, operatori di tipo, tipi discriminati e tipi avanzati consente di gestire in modo più preciso e flessibile le varie situazioni che possono presentarsi nel flusso logico del tuo codice.

---

<br>

# Configurazione del Compilatore TypeScript

La configurazione del compilatore TypeScript è gestita principalmente tramite il file `tsconfig.json`. Questo file consente di specificare varie opzioni per controllare il comportamento del compilatore TypeScript nel tuo progetto.

### File `tsconfig.json`

Il file `tsconfig.json` contiene un oggetto JSON con le impostazioni per il progetto TypeScript. Ecco alcuni dei parametri più comuni e importanti che puoi configurare:

#### `compilerOptions`

Questo oggetto specifica varie opzioni del compilatore.

```json
{
  "compilerOptions": {
    "target": "es5", // Specifica la versione ECMAScript di output
    "module": "commonjs", // Specifica il sistema di moduli
    "strict": true, // Abilita una stretta verifica dei tipi
    "outDir": "./dist", // Percorso di output per i file compilati
    "sourceMap": true, // Genera file sorgente map per il debugging
    "noImplicitAny": true, // Impedisce l'uso di 'any' implicite
    "moduleResolution": "node", // Modalità di risoluzione del modulo
    "esModuleInterop": true, // Abilita la compatibilità con i moduli ES6
    "skipLibCheck": true, // Salta il controllo dei tipi nei file di dichiarazione
    "forceConsistentCasingInFileNames": true // Forza la coerenza nel casing dei nomi dei file
  }
}
```

#### `include` e `exclude`

Questi campi permettono di specificare quali file includere o escludere dal processo di compilazione.

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

#### `extends`

Questa opzione permette di estendere le configurazioni da un altro file `tsconfig.json`.

```json
{
  "extends": "./configs/base",
  "compilerOptions": {
    // Opzioni specifiche del progetto
  }
}
```

#### `files`

Specifica un elenco di file da includere nel progetto.

```json
{
  "files": ["main.ts", "globals.d.ts"]
}
```

### Comprendere le Opzioni del Compilatore

- **`target`**: Specifica la versione ECMAScript di output (es. `es5`, `es6`, ecc.).
- **`module`**: Specifica il sistema di moduli da utilizzare (es. `commonjs`, `amd`, ecc.).
- **`strict`**: Abilita una serie di opzioni per una più stretta verifica dei tipi.
- **`outDir`**: Specifica la cartella di output per i file compilati.
- **`sourceMap`**: Genera file sorgente map per supportare il debugging.
- **`noImplicitAny`**: Impedisce l'uso implicito di `any`.
- **`esModuleInterop`**: Migliora la compatibilità con i moduli ES6.

### Best Practices

- **Utilizza `strict`**: Questa opzione abilita un insieme di impostazioni rigorose che aiutano a identificare problemi prima.
- **Definisci `include` e `exclude`**: Specifica quali file dovrebbero essere inclusi o esclusi per evitare la compilazione di file non necessari.
- **Configura `sourceMap` per il Debugging**: Se stai sviluppando un'applicazione, le source map sono utili per il debugging.

### Conclusione

La configurazione del compilatore TypeScript attraverso `tsconfig.json` è un aspetto cruciale per gestire come il tuo progetto viene compilato e costruito. Saper sfruttare queste configurazioni ti permette di avere un controllo preciso e personalizzato sul processo di compilazione, migliorando l'efficacia e l'efficienza dello sviluppo.

---
