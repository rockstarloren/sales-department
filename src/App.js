import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Design from "./components/Design";
import Build from "./components/Build";
import Graphics from "./components/Graphics";
import Technical from "./components/Technical";
import Consumable from "./components/Consumable";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/build" element={<Build />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/consumable" element={<Consumable />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
