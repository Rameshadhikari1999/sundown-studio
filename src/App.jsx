import React from "react";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import './App.css'

const App = ({ Component }) => {
  return (
    <div className="w-[96vw] lg:w-[98.7vw] mx-auto overflow-x-hidden bg-[#EFEAE3] font-neo">
        <Nav />
        <Component />
        <Footer />
    </div>
  );
};

export default App;
