import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './sub/Header';
import Footer from './sub/Footer';
import DetailProduct from './sub/DetailProduct';
import ListProduct from './sub/ListProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
const titleText = 'SimpleShop v0.1';
const footerText = 'Copyright "(c) 2024 All right reversed ME';

root.render(
  <BrowserRouter>
    <div id='wrapper'>
      <Header titleText={titleText} />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/product/:pid" element={<DetailProduct />} />
      </Routes>
      <Footer footerText={footerText} />
    </div>
  </BrowserRouter >
);
