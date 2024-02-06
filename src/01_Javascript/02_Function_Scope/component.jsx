import React from "react"

export const useInput = (type) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const onChange = (e) => {
    setValue(e.target.value)
    validate(e.target.value)
  }

  const validate = (value) => {
    if (type === "email") {
      if (!/\S+@\S+.\S+/.test(value)) {
        setError("Email non valida")
      }
    }
    if (type === "password") {
      if (!/\S+@\S+.\S+/.test(value)) {
        setError("Email non valida")
      }
    }
    setError("")
    return
  }

  return {
    onChange,
    value,
    error,
  }
}
