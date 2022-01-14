import { useState } from "react";
import Navbar from "./components/navbar";
import Planets from "./components/planets";
import People from "./components/people";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Starwars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
