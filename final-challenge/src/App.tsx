import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import ProductDetail from "./components/product-detail/ProductDetail";
import SeeAll from "./components/see-all/SeeAll";
import Search from './components/search/Search'

import './index.css';

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
  return <ProductDetail />
}

const SeeAllPage = () => {
  return <SeeAll />
}

const SearchPage = () => {
  return <Search />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          <Route path="/see-all" element={<SeeAllPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
