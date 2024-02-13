import { useEffect, useState } from "react";
import { ResponseAdapter, fetchData } from "fetch-api";

const useFetch = <I, O>(
  url: string,
  adapter: ResponseAdapter<I, O>,
  mock?: I
): { isLoading: boolean; data: O | null; error: Error | null } => {
  const [data, setData] = useState<O | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData<I, O>(url, adapter, mock);
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error("Unexpected error"));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchAsync();
  }, [url, adapter, mock]);

  return { isLoading, data, error };
};

export default useFetch;
