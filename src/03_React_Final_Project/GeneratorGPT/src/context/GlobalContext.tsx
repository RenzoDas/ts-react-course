import { ReactNode, createContext, useState } from "react"

export const GlobalContext = createContext<{
  isSidebarOpened?: boolean
  setIsSidebarOpened?: React.Dispatch<React.SetStateAction<boolean>>
}>({})

export const GlobalContextProvider = ({
  children,
}: {
  children?: ReactNode
}) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)
  return (
    <GlobalContext.Provider value={{ isSidebarOpened, setIsSidebarOpened }}>
      {children}
    </GlobalContext.Provider>
  )
}
