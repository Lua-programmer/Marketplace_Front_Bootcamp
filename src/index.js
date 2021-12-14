import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import Navbar from "./components/Navbar/Navbar";
import BottomNav from "./components/BottomNav/BottomNav";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import Menu from "./Pages/Menu";


import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Category" element={<Category/>}/>
        <Route path="/Menu" element={<Menu/>}/>

      </Routes>
    </BrowserRouter>
    <BottomNav/>
  </React.StrictMode>,
  document.getElementById('root')
);