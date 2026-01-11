import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import FirstSection from './components/FirstSection.jsx'
import SecondSection from './components/SecondSection.jsx'
import ThirdSection from './components/ThirdSection.jsx'
import FourthSection from './components/FourthSection.jsx'
import FifthSection from './components/FifthSection.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/FirstSection' element={<FirstSection/>}></Route>
      <Route path='/SecondSection' element={<SecondSection/>}></Route>
      <Route path='/ThirdSection' element={<ThirdSection/>}></Route>
      <Route path='/FourthSection' element={<FourthSection/>}></Route>
      <Route path='/FifthSection' element={<FifthSection/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
    </Routes>
    </BrowserRouter> */}
    <App/>
  </StrictMode>,
)
