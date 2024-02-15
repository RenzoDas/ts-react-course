import { useEffect, useState } from "react"
import { ResponseAdapter, fetchData } from "fetch-api"
import { ResponseValidator } from "fetch-api/src/types"

type Options<I, O> = {
  url: string
  validator: ResponseValidator<I>
  adapter: ResponseAdapter<I, O>
  mock?: I
}

const useFetch = <I, O>({
  url,
  validator,
  adapter,
  mock,
}: Options<I, O>): { isLoading: boolean; data: I | O | null; error: Error | null } => {
  const [data, setData] = useState<I | O | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        setIsLoading(true)
        const result = await fetchData<I, O>({ url, validator, adapter, mock })
        setData(result)
      } catch (e) {
        if (e instanceof Error) {
          setError(e)
        } else {
          setError(new Error("Unexpected error"))
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchAsync()
  }, [url, validator, adapter, mock])

  return { isLoading, data, error }
}

export default useFetch
