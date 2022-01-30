import React from 'react';
import { FaDiscord, FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinkWrap, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinker, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLinks } from './FooterElement';

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
                        <FooterLink to="" >
                           <FooterLinker href="https://bit.ly/3rb4qYO">
                              Tokenomics
                           </FooterLinker>
                        </FooterLink>

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
                        <SocialIconLinks href="https://twitter.com/Bullmantoken?t=YSA-LtMgz3SZV6M4i3Bp3A&s=09" target="_blank" arial-label="twitter">
                           <FaTwitter />
                        </SocialIconLinks>

                        <SocialIconLinks href="https://t.me/BULLMAN_TOKENS" target="_blank" arial-label="telegram">
                           <FaTelegram />
                        </SocialIconLinks>

                        <SocialIconLinks href="https://discord.gg/NTQ2xFPD" target="_blank" arial-label="discord">
                           <FaDiscord />
                        </SocialIconLinks>
                        <SocialIconLinks href="https://link.medium.com/unqg0Y3otlb" target="_blank" arial-label="discord">
                           <FaMedium />
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
