import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";

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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
