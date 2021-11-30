import React from 'react';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinkWrap, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLinks } from './FooterElement';

const Footer = () => {
   const toogleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <>
         <FooterContainer>
            <FooterWrapper>
               <FooterLinksContainer>
                  <FooterLinkWrap>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                        <FooterLink to="/"> How it Works</FooterLink>
                        <FooterLink to="/"> Tokenomics</FooterLink>
                     </FooterLinkItems>

                     <FooterLinkItems>
                        <FooterLinkTitle>Community</FooterLinkTitle>
                        <FooterLink to="/">Twitter </FooterLink>
                        <FooterLink to="/"> Telegram</FooterLink>
                        <FooterLink to="/"> Discord</FooterLink>
                        <FooterLink to="/"> Medium</FooterLink>
                     </FooterLinkItems>

                     <FooterLinkItems>
                        <FooterLinkTitle>Support </FooterLinkTitle>
                        <FooterLink to="/"> FAQ</FooterLink>
                        <FooterLink to="/"> Contact Us</FooterLink>
                     </FooterLinkItems>
                  </FooterLinkWrap>
               </FooterLinksContainer>
               <SocialMedia>
                  <SocialMediaWrap>
                     <SocialLogo to="/" onClick={toogleHome}> BULLMANSPACE </SocialLogo>
                     <WebsiteRights>Bullmanspace © 2021
                        All rights reserved.
                     </WebsiteRights>
                     <SocialIcons>
                        <SocialIconLinks href="/" target="_blank" arial-label="twitter">
                           <FaTwitter />
                        </SocialIconLinks>

                        <SocialIconLinks href="/" target="_blank" arial-label="telegram">
                           <FaTelegram />
                        </SocialIconLinks>

                        <SocialIconLinks href="/" target="_blank" arial-label="discord">
                           <FaDiscord />
                        </SocialIconLinks>
                     </SocialIcons>
                  </SocialMediaWrap>
               </SocialMedia>
            </FooterWrapper>
         </FooterContainer>
      </>
   )
}

export default Footer
