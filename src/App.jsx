import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Overview, Home, Notes } from "./pages";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="flex flex-row">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </main>
  );
}

export default App;
