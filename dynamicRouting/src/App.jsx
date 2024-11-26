import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


