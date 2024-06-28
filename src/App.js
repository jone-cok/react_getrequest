import logo from "./logo.svg";
// import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Home from "./Views/Home.js";
import About from "./Views/About.js";
import Login from "./Views/Login.js";
import SignUp from "./Views/SignUp.js";
import Product from "./Views/Product.js";

function App() {
  return (
    <div >
      <Header />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
