import { Routes, Route } from "react-router-dom"
import Components from "./pages/Components/Components"
import { Home } from "./pages/Home/Home"
import { AppLayout } from "@layouts/AppLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
