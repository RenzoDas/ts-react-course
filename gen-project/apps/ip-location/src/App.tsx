import { ipAdapter } from "./adapters";
import CurrentIp from "./components/CurrentIp";
import { Map } from "./components/Map";
import useFetch from "./hooks/use-fetch";
import { BackendIp, FrontendIp } from "./types/ip";
import "./App.css";

function App() {
  const { isLoading, data, error } = useFetch<BackendIp, FrontendIp>(
    "/api",
    ipAdapter
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errore!</div>;
  if (!data) return <div>Data not available</div>;

  return (
    <>
      <div>
        <CurrentIp {...data} />
        <Map coordinate={data.coordinate} zoom={9} />
      </div>
    </>
  );
}

export default App;
