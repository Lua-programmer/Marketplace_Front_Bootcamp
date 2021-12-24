import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register/Register";
import BottomNav from "./components/BottomNav/BottomNav";
import Store from "./Pages/Store";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="category" element={<Category />} />
        <Route path="menu" element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="store" element={<Store />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
