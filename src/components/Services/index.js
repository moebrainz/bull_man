import React from 'react';
import { ServicesContainer, ServiceLinks, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcons, ServicesH2, ServicesP } from './ServicesElements'

const Services = ({ icon1, icon2, icon5 }) => {
   return (
      <ServicesContainer>
         <ServiceLinks to="roadmap"> <ServicesH1> ROAD MAP  </ServicesH1>
         </ServiceLinks>

         <ServicesWrapper>
            <ServicesCard>
               <ServicesIcons src={icon1} />
               <ServicesH2>Q4  2021 </ServicesH2>
               <ServicesP> Bullman Team Formation </ServicesP>
               <ServicesP> Set up social media channels </ServicesP>
               <ServicesP> Airdrop program </ServicesP>
               <ServicesP> Website Lunch </ServicesP>
               <ServicesP> pre-sale </ServicesP>
               <ServicesP> Tinyman listing </ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesIcons src={icon2} />
               <ServicesH2>Q1  2022 </ServicesH2>
               <ServicesP> Partnership </ServicesP>
               <ServicesP> White paper release </ServicesP>
               <ServicesP> CoinGecko,CMC listing </ServicesP>
               <ServicesP> Minor exchange listing </ServicesP>
               <ServicesP> pre-sale </ServicesP>
               <ServicesP> Reward early adopters </ServicesP>
            </ServicesCard>

            <ServicesCard>
               <ServicesIcons src={icon5} />
               <ServicesH2>Q2 2022</ServicesH2>
               <ServicesP> setting up of gallery for early creators </ServicesP>
               <ServicesP> Large chains/platforms partnership</ServicesP>
               <ServicesP> Global marketing campaign </ServicesP>
               <ServicesP> Major exchange listing </ServicesP>
               <ServicesP> NFT market place </ServicesP>
               <ServicesP> Further partnership </ServicesP>
            </ServicesCard>
         </ServicesWrapper>
      </ServicesContainer>
   )
}

export default Services
