import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement';
import Video from '../../video/v2.mp4';
import { ButtonLink } from '../ButtonElement';

const HeroSection = () => {

   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   return (
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} types='v2.mp4' />
         </HeroBg>
         <HeroContent>
            <HeroH1>Bull Man Token is Here!</HeroH1>
            <HeroP>
               The first ever token that rewards holders through NFT
            </HeroP>
            <HeroBtnWrapper>
               <ButtonLink href="https://app.tinyman.org/#/swap?asset_in=0"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
               >
                  Get Token From TinyMan {hover ? <ArrowForward /> : <ArrowRight />}

               </ButtonLink>
               <ButtonLink href="https://forms.gle/Wnk6zSjQzuPJrfLP6"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
               >
                  BullmanSpace Presale {hover ? <ArrowForward /> : <ArrowRight />}

               </ButtonLink>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection