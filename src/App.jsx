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
import SecurePayments from "./components/SecurePayments";
import VideoComponent from "./components/VideoComponent";

const App = () => {
  
  return ( 
    <div>
       
      <BrowserRouter>
        <Routes>
          <Route path="/videopage" element={<>
              <Navbar />
              <FirstSection />
              <SecondSection />
              <ThirdSection />
              <FourthSection />
              <VideoComponent />
              <FifthSection />
              <Footer />
          </>} />

          <Route path="/fast-transaction" element={<>
              <Navbar />
              <FirstSection />
              <SecondSection />
              <FastTransaction />
              <FourthSection />
              <FifthSection />
              <Footer />
          </>} />
          <Route path="/secure-payments" element={<>
              <Navbar />
              <FirstSection />  
              <SecondSection />
              <SecurePayments />
              <FourthSection />
              <FifthSection />
              <Footer />
          </>} />
          <Route path="/" element={
            <> 
              <Navbar />
              <FirstSection />    
              <SecondSection />
              <ThirdSection />
              <FourthSection />
              <FifthSection />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
 
    
    </div>
  );
};

export default App;
