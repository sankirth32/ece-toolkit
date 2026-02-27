import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import OhmsPage from "./pages/OhmsPage";
import RCPage from "./pages/RCPage";
import BinaryPage from "./pages/BinaryPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;