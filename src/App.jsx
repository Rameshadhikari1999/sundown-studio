import React from "react";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import "./App.css";

const App = ({ Component }) => {
  return (
    <div className="w-[100vw] lg:w-[98.7vw] mx-auto  font-neo  overflow-x-hidden">
      <div className="w-full relative z-10">
        <div className="w-full bg-[#EFEAE3]">
          <Nav />
          <Component />
        </div>
        <div className="w-full min-h-[100vh]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
