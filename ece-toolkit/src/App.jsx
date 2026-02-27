import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import OhmsPage from "./pages/OhmsPage";
import RCPage from "./pages/RCPage";
import BinaryPage from "./pages/BinaryPage";
import VoltageDividerPage from "./pages/VoltageDividerPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* TOOLS PAGE */}
        <Route path="/tools" element={<Tools />} />

        <Route path="/tools/ohms" element={<OhmsPage />} />
        <Route path="/tools/rc" element={<RCPage />} />
        <Route path="/tools/binary" element={<BinaryPage />} />
        <Route path="/tools/voltage-divider" element={<VoltageDividerPage />} />
      </Routes>
    </Router>
  );
}

export default App;