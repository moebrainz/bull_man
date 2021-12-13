import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react';
import PreSale from './components/PreSale';
import { presaleObj } from './components/PreSale/Data';


function App() {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }



   return (
      <Router>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />


         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presale" element={<PreSale {...presaleObj} />} />
         </Routes>
         <Footer />
      </Router>

   );
};

export default App;
