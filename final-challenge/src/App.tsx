import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";

import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import ProductDetail from "./components/product-detail/ProductDetail";
import SeeAll from "./components/see-all/SeeAll";
import Search from "./components/search/Search";
import Cart from './components/cart/Cart';

import "./index.css";

const HomePage = () => {
  return <Home />;
};

const SigninPage = () => {
  return <Signin />;
};

const SignupPage = () => {
  return <Signup />;
};

const ProductDetailPage = () => {
  return <ProductDetail />;
};

const SeeAllPage = () => {
  return <SeeAll />;
};

const SearchPage = () => {
  return <Search />;
};

const CartPage = () => {
  return <Cart />
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          <Route path="/see-all" element={<SeeAllPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
