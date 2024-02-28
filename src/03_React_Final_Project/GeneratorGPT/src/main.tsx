import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.tsx"
import "./styles/globals.css"
import { GlobalContextProvider } from "./context/GlobalContext.tsx"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
)
