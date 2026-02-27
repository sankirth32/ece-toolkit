import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import OhmsPage from "./pages/OhmsPage";
import RCPage from "./pages/RCPage";
import BinaryPage from "./pages/BinaryPage";
import VoltageDividerPage from "./pages/VoltageDividerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools/ohms" element={<OhmsPage />} />
        <Route path="/tools/rc" element={<RCPage />} />
        <Route path="/tools/binary" element={<BinaryPage />} />
        <Route path="/tools/voltage-divider" element={<VoltageDividerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;