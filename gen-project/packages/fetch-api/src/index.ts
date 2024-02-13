import { ResponseAdapter, ResponseValidator } from "./types"

type Options<I, O> = { url: string; validator: ResponseValidator<I>; adapter: ResponseAdapter<I, O>; mock?: I }

const fetchData = async <I, O>({ url, validator, adapter, mock }: Options<I, O>): Promise<O | null> => {
  try {
    if (mock) return adapter(mock)
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
    return adapter(validatedResponse)
  } catch (error: any) {
    console.log("Errore nella richiesta:", error.message)
  }
  return null
}

export default fetchData
