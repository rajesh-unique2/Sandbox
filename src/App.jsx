import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";
import FastTransaction from "./components/FastTransaction";

const App = () => {
  return (
    <BrowserRouter>
      <div className="box-border m-0 h-screen w-screen bg-white">
        <Navbar />
        <Routes>
          {/* Default route shows all sections */}
          <Route
            path="/"
            element={
              <>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <Footer />
              </>
            }
          />
          <Route path="/Third" element={<> <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <Footer /> </>} />
          <Route path="/Fast" element={<> <FirstSection />
                <SecondSection />
                <FastTransaction/>
                <FourthSection />
                <FifthSection />
                <Footer />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
