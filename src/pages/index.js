import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjone, homeObjtwo, homeObjthree, homeObjfour } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import { serviceObj } from '../components/Services/Data';
import Sidebar from '../components/Sidebar';

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }


   return (
      <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjone} />
         <InfoSection {...homeObjtwo} />
         <InfoSection {...homeObjthree} />
         <InfoSection {...homeObjfour} />
         <Services {...serviceObj} />
         <Footer />
      </>
   )
}

export default Home
