import { Routes, Route } from "react-router-dom"
import Components from "./pages/Components/Components"
import { Home } from "./pages/Home/Home"
import { Layout } from "@components/layouts/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout variant="LayoutMain" />}>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Route>
        <Route
          path="/settings"
          element={<Layout variant="LayoutUserSettings" />}
        >
          <Route path="/settings" element={<div>Settings</div>} />
          <Route path="/settings/api" element={<div>API</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
