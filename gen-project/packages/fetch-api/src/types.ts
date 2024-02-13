type ResponseAdapter<I, O> = (data: I) => O

type ResponseValidator<T> = (data: unknown) => T | null

export type { ResponseAdapter, ResponseValidator }
