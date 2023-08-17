import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/products";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
