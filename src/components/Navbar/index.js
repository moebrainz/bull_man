import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logopic from '../../images/bull.png';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavImg, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav = () => {
      if (window.scrollY >= 80) {
         setScrollNav(true)
      } else {
         setScrollNav(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', changeNav)
   }, [])

   const toogleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>

               <NavLogo to='/' onClick={toogleHome}>     <NavImg src={Logopic} />  BullmanSpace  </NavLogo>
               <MobileIcon onClick={toggle}>
                  <FaBars />
               </MobileIcon>
               <NavMenu>
                  <NavItem>
                     <NavLinks onClick={toogleHome}> Home  </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="about"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                     >About  </NavLinks>
                  </NavItem>
                  <NavItem>
                     <NavLinks to="tokenomics"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                     >Tokenomics  </NavLinks>
                  </NavItem>

                  <NavItem>
                     <NavLinks to="nft"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                     >NFT MarketPlace  </NavLinks>
                  </NavItem>


               </NavMenu>


            </NavbarContainer>
         </Nav>

      </>
   );
};

export default Navbar;
