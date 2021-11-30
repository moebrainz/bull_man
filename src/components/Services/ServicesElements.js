import styled from "styled-components";
import { Link as LinkSE } from 'react-scroll';


export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px) {
   height: 1110px;
}

@media screen and (max-width: 480PX) {
   height: 1300px;
}  

`
export const ServiceLinks = styled(LinkSE)`
   transition: 0.8s all ease;
`
export const ServicesH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-bottom: 30px;

   @media screen and (max-width: 480px) {
      font-size: 2rem;
   }
`

export const ServicesWrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   align-items: center;
   grid-gap: 16px;
   padding: 0 50px;

   @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 760px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
   }
`

export const ServicesCard = styled.div`
   background: #fff;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-radius: 10px;
   max-height: 340px;
   padding: 15px;
   box-shadow: 0 1px 3px rgba(0,0,0,2);
   transition: all 0.2s ease-in-out;

   &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
   }
`

export const ServicesIcons = styled.img`
   height: 110px;
   width: 110px;
   margin-bottom: 0.2px;
`

export const ServicesP = styled.p`
   font-size: 0.8rem;
   text-align: center;
   padding: 0 1px;
   margin-bottom: 0;

   @media screen and (max-width: 480px) {
      font-size: 0.6rem;
      padding: 0;
   }
`

export const ServicesH2 = styled.h2`
   font-size: 1rem;
   margin-bottom: 10px;
   font-weight: bold;

   @media screen and (max-width: 480px) {
      font-size: 2rem;
   }
`