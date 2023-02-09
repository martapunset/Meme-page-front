import "./App.css";
import { MemesProvider } from "./MemesContext/MemesProvider";

import { Layout } from "./pages";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <MemesProvider>
        <Router />
        </MemesProvider>
    </div>
  );
}

export default App;
