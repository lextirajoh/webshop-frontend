import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import './styles/main.css';
import {
  Home,
  Account,
  Login,
  Register,
  Reset,
  Wishlist,
  Cart,
  Contact,
  ProductDetail,
  All,
  Family,
  Party,
  Strategie,
} from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="productdetail" element={<ProductDetail />} />
            <Route path="account" element={<Account />} />
            <Route path="account/login" element={<Login />} />
            <Route path="account/register" element={<Register />} />
            <Route path="account/reset" element={<Reset />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/products/All" element={<All />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/products/Strategie" element={<Strategie />} />
            <Route path="/products/Familie" element={<Family />} />
            <Route path="/products/Party" element={<Party />} />
            <Route path="*" element={<p>Page not found!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
