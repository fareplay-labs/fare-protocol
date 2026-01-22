import "./App.css";
import { Navbar } from "./components/navbar";
import { RouteList } from "./routes";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <RouteList />
    </div>
  );
}

export default App;
