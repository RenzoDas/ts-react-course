import "./App.css"
import { ipAdapter } from "./adapters"
import CurrentIp from "./components/current-ip"
import Map from "./components/map"
import useFetch from "./hooks/use-fetch"
import { BackendIp, FrontendIp } from "./types/ip"
import { validateBackendIp } from "./validator"

function App() {
  const { isLoading, data, error } = useFetch<BackendIp, FrontendIp>({
    url: "/api",
    validator: validateBackendIp,
    adapter: ipAdapter,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Errore!</div>
  if (!data) return <div>Data not available</div>

  return (
    <div className="App">
      <CurrentIp {...data} />
      <Map coordinates={data.coordinates} />
    </div>
  )
}

export default App
