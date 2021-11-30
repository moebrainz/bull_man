import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebarWrap, SidebarRoute } from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
   const toogleHome = () => {
      scroll.scrollToTop();
   }


   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="" onClick={toogleHome}>
                  <SidebarLink onClick={toggle}>   Home</SidebarLink>

               </SidebarLink>
               <SidebarLink to="about" onClick={toggle}>
                  About
               </SidebarLink>
               <SidebarLink to="tokenomics" onClick={toggle}>
                  Tokenomics
               </SidebarLink>

               <SidebarLink to="nft" onClick={toggle}>
                  NFT MarketPlace
               </SidebarLink>


            </SidebarMenu>
            <SidebarWrap>
               <SidebarRoute to=""> Buy Now </SidebarRoute>
            </SidebarWrap>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar;
