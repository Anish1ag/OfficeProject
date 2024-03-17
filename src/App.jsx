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
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import User from "./pages/User";
import Contact from "./pages/Contact";
import DynamicRoute from "./pages/dynamicRoute/DynamicRoute";
import GlobalContext from "./GlobalContext";
import { useState } from "react";
import ReactHookForm from "./pages/ReactHookForm";
import Formpost from "./pages/Formpost";

function App() {
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/admin/*" element={<Protected />}>
          <Route index element={<Admin />} />
          <Route path="adminhome" element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="" element={<Products />}>
            <Route path="/products/:name" element={<Websites />} />
            <Route path="/products/second/:model" element={<MobileApp />} />
            <Route path="/products/third/:webapp" element={<WebApp />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reacthookform" element={<ReactHookForm />} />
          <Route path="/formpost" element={<Formpost />} />
        </Route>
        <Route path="/dynamic/:id" element={<DynamicRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
