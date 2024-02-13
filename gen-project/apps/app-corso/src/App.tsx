import "./App.css";
import { ipAdapter } from "./adapters";
import CurrentIp from "./components/current-ip";
import useFetch from "./hooks/use-fetch";
import { ipMock } from "./mock/ip";
import { BackendIp, FrontendIp } from "./types/ip";

function App() {
  const { isLoading, data, error } = useFetch<BackendIp, FrontendIp>(
    "/api",
    ipAdapter,
    import.meta.env.VITE_USEMOCK ?? ipMock
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errore!</div>;
  if (!data) return <div>Data not available</div>;

  return (
    <div className="App">
      <CurrentIp {...data} />
    </div>
  );
}

export default App;
