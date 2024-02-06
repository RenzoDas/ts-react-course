/*
 * ESERCIZI PRATICI - JavaScript Asincrono
 * --------------------------------------------------------
 * Questo documento contiene esercizi pratici per comprendere
 * il funzionamento dell'asincronia in JavaScript.
 */

////////////////////////////////////////////////////////////
// ESERCIZIO 1: Uso di Callbacks
////////////////////////////////////////////////////////////

/**
 * Scrivi una funzione che accetta una callback e la invoca dopo un ritardo.
 * La callback dovrebbe stampare un messaggio.
 * Usa `setTimeout` per simulare il ritardo.
 */

const delayCallback = (callback) => {
  setTimeout(() => {
    callback()
  }, 3000)
}

// delayCallback(() => console.log("Messaggio stampato"))
////////////////////////////////////////////////////////////
// ESERCIZIO 2: Conversione Callback in Promise
////////////////////////////////////////////////////////////

/**
 * Converte l'esercizio 1 in una Promise invece di utilizzare una callback.
 * Usa la Promise per gestire il ritardo e poi stampa il messaggio.
 */

const delayCallback2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("ERRORE")
    }, 3000)
    setTimeout(() => {
      res("Risolto")
    }, 2999)
  })
}

const onSuccess = (data) => console.log(`OK : ${data}`)
const onError = (e) => console.log(`Error : ${e}`)

// delayCallback2().then(onSuccess, onError)
// delayCallback2().then(onSuccess).catch(onError)

////////////////////////////////////////////////////////////
// ESERCIZIO 3: Gestione degli Errori in Promises
////////////////////////////////////////////////////////////

/**
 * Crea una Promise che si risolve o rifiuta in base a una condizione.
 * Gestisci entrambi i casi (resolve e reject) e stampa i messaggi appropriati.
 */

const conditionPromise = () =>
  new Promise((res, rej) => {
    if (Math.random() > 0.5) {
      res("Okay il numero è maggiore di 0.5")
    } else {
      rej("Errore il numero non è maggiore di 0.5")
    }
  })

// conditionPromise().then(onSuccess).catch(onError)

////////////////////////////////////////////////////////////
// ESERCIZIO 4: Uso di Async/Await
////////////////////////////////////////////////////////////

/**
 * Riscrivi l'esercizio 2 usando `async` e `await` anziché then/catch.
 * Gestisci il successo e l'errore con un blocco try/catch.
 */

// const delayCallback2 = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         rej("ERRORE")
//       }, 3000)
//       setTimeout(() => {
//         res("Risolto")
//       }, 2999)
//     })
//   }

const delayCallback3 = async () => {
  try {
    const result = await conditionPromise()
    console.log(`Il risultato della callback asincrona è ${result}`)
  } catch (e) {
    console.log(`Il risultato della callback asincrona è ${e}`)
  }
}

delayCallback3()

////////////////////////////////////////////////////////////
// ESERCIZIO 5: Catena di Promises
////////////////////////////////////////////////////////////

/**
 * Crea una serie di funzioni che ritornano Promises.
 * Chiama queste funzioni in una catena di Promises.
 * Usa `.then()` e `.catch()` per gestire i risultati e gli errori.
 */

const getWeather = () => {
  return new Promise((res, rej) => {
    const random = Math.random()
    if (random > 0.7) {
      res("Sunny")
    } else if (random > 0.4) {
      res("Raining")
    } else {
      res("Cloudy")
    }
  })
}

const getWeatherIcon = (weather) => {
  return new Promise((res, rej) => {
    if (weather === "Sunny") {
      res("☀️")
    } else if (weather === "Raining") {
      res("⛈️")
    } else {
      res("☁️☁️")
    }
  })
}

getWeather()
  .then((condition) => `Weather Condition ${condition}`)
  .then(console.log)
////////////////////////////////////////////////////////////
// ESERCIZIO 6: Catena di Async/Await
////////////////////////////////////////////////////////////

/**
 * Riscrivi l'esercizio 5 usando `async/await`.
 * Gestisci i risultati e gli errori con try/catch.
 */

const getFullWeather = async () => {
  try {
    const [condition, icon] = await Promise.all([
      getWeather(),
      getWeatherIcon(),
    ])
    console.log(`Weather condition: ${condition} ${icon}`)
  } catch (e) {
    return `Errore: ${e}`
  }
}

getFullWeather()

////////////////////////////////////////////////////////////
// ESERCIZIO 7: Fetch API con Async/Await
////////////////////////////////////////////////////////////

/**
 * Usa la Fetch API per ottenere dati da un URL.
 * Gestisci la richiesta come una Promise con `async/await`.
 * Stampa il risultato o cattura gli errori.
 */

const params = {
  latitude: 39.5986,
  longitude: 16.6349,
  hourly: "temperature_2m",
  timezone: "Europe/Berlin",
  umidity: true,
}

const baseUrl = `https://api.open-meteo.com/v1/forecast`

const getUrlParams = (params) => {
  return Object.entries(params)
    .map((param, i) => `${i === 0 ? "?" : "&"}${param[0]}=${param[1]}`)
    .join("")
}

const fetchWeather = async () => {
  const url = `${baseUrl}${getUrlParams(params)}`

  try {
    const res = await fetch(url)
    const data = res.json()
    return data
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

fetchWeather(params).then(console.log)

////////////////////////////////////////////////////////////
// ESERCIZIO 8: Timeout con Promise
////////////////////////////////////////////////////////////

/**
 * Crea una funzione che restituisce una Promise che si risolve o si rifiuta
 * basata su un timeout. Se l'operazione è troppo lunga, la Promise dovrebbe essere rifiutata.
 */

function timeoutPromise(duration) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (duration > 3000) {
        rej("Operazione troppo lunga")
      } else {
        res("Operazione completata")
      }
    }, duration)
  })
}

timeoutPromise(4000)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })
////////////////////////////////////////////////////////////
// ESERCIZIO 9: Promise.all e Gestione degli Errori in Async/Await con Diverse Fonti
////////////////////////////////////////////////////////////

/**
 * Crea una funzione asincrona che utilizza async/await per richiamare dati da due diverse API
 * (ad esempio, dati meteo e dati di borsa).
 * Usa Promise.all per gestire entrambe le richieste in parallelo.
 * Implementa un controllo degli errori dettagliato con try/catch per gestire situazioni come
 * la mancanza di risposta da una delle API, o errori nei dati ricevuti. Stampa i risultati o
 * i messaggi di errore in base al caso.
 *
 */
