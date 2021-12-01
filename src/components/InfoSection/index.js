import React from 'react';
import { ButtonLink } from '../ButtonElement';


import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const infoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, description, buttonLabel, darkText, img, alt, primary, dark, dark2, href }) => {
   return (
      <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart} variant="one">
                  <Column1>
                     <TextWrapper>
                        <TopLine>{topLine} </TopLine>
                        <Heading lightText={lightText}> {headline}</Heading>
                        <Subtitle darkText={darkText} >{description}</Subtitle>
                        <BtnWrap>
                           <ButtonLink href={href}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}

                           >{buttonLabel} </ButtonLink>
                        </BtnWrap>
                     </TextWrapper>
                  </Column1>
                  <Column2 variant="two">
                     <ImgWrap>
                        <Img src={img} alt={alt} />
                     </ImgWrap>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </>
   )
}

export default infoSection
