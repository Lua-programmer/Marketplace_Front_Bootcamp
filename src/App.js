import React from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import GlobalStyle from "./Style/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import BottomNav from "./components/BottomNav/BottomNav";
import Store from "./Pages/Store";
import Product from "./Pages/Product";


axios.defaults.baseURL = "https://marketplace-healthy-life.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product" element={<Product />} />
        <Route path="category" element={<Category />} />
        <Route path="menu" element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="store" element={<Store />} />
      </Routes>
      <BottomNav />
      <GlobalStyle />
    </div>
  );
}

export default App;
