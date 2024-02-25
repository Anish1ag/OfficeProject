import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/product/Products";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Websites from "./pages/product/Websites";
import MobileApp from "./pages/product/MobileApp";
import WebApp from "./pages/product/WebApp";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="" element={<Websites />} />
          <Route path="second" element={<MobileApp />} />
          <Route path="third" element={<WebApp />} />
        </Route>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
