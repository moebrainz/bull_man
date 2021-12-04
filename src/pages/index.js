import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjone, homeObjtwo, homeObjthree, homeObjfour } from '../components/InfoSection/Data';
import Services from '../components/Services';
import { serviceObj } from '../components/Services/Data';


const Home = () => {


   return (
      <>

         <HeroSection />
         <InfoSection {...homeObjone} />
         <InfoSection {...homeObjtwo} />
         <InfoSection {...homeObjthree} />
         <InfoSection {...homeObjfour} />
         <Services {...serviceObj} />
      </>
   )
}

export default Home
