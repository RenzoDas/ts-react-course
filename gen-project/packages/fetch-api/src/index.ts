import { ResponseAdapter, ResponseValidator } from "./types"

/**
 * L'interfaccia Options descrive i parametri di input della funzione fetchData
 *
 * @param url - L'endpoint su cui fare una richiesta API
 * @param validator - Funzione di validazione conforme all'interfaccia {@link ResponseValidator<I>}
 * @param adapter - Funzione di adapter della response
 * @param mock - Un'oggetto mock su cui operare
 */
type Options<I, O> = {
  url: string
  validator: ResponseValidator<I>
  adapter?: ResponseAdapter<I, O>
  mock?: I
}

const fetchData = async <I, O>({ url, validator, adapter, mock }: Options<I, O>): Promise<I | O | null> => {
  try {
    if (mock) return adapter ? adapter(mock) : mock
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error("Errore nella richiesta")
    }
    const res: I = await response.json()

    const validatedResponse = validator(res)
    if (!validatedResponse) {
      throw new Error("Dati API inaspettati")
    }
    return adapter ? adapter(validatedResponse) : validatedResponse
  } catch (error: any) {
    console.log("Errore nella richiesta:", error.message)
  }
  return null
}

export default fetchData
