import React, { useState } from 'react'
import { PresaleContainer, PresaleWrapper, PresaleRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './PresaleElement'
import { Button } from '../ButtonElement'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PreSale = ({ lightBg, id, imgStart, topLine, lightText, headline, description, description1, description2, description3, description4, description5, description6, description7, buttonLabel, darkText, primary, dark, dark2, href }) => {

   const [copied, setCopied] = useState(false)

   return (
      <>
         <PresaleContainer lightBg={lightBg} id={id}>
            <PresaleWrapper>
               <PresaleRow imgStart={imgStart} variant="one">
                  <Column1>
                     <TextWrapper >
                        <TopLine>{topLine} </TopLine>
                        <Heading lightText={lightText}> {headline}</Heading>
                        <Subtitle darkText={darkText} >{description}</Subtitle>
                        <Subtitle darkText={darkText} >{description1}</Subtitle>
                        <Subtitle darkText={darkText} >{description2}</Subtitle>
                        <Subtitle darkText={darkText} >{description3}</Subtitle>
                        <Subtitle darkText={darkText} >{description6}</Subtitle>
                        <Subtitle darkText={darkText} >{description4}</Subtitle>
                        <Subtitle darkText={darkText} >{description5}</Subtitle>
                        <Subtitle darkText={darkText} >{description7}</Subtitle>
                        <BtnWrap>
                           <CopyToClipboard
                              text={description7}
                              onCopy={() => setCopied(true)}
                           >

                              <Button to="/Get from Algodex"
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1 : 0}
                                 dark={dark ? 1 : 0}
                                 dark2={dark2 ? 1 : 0}

                              >{buttonLabel} </Button>
                           </CopyToClipboard>
                           {copied ? <span style={{ color: 'green', display: 'flex', padding: '1rem', alignItems: 'center' }} >Copied</span> : null}
                        </BtnWrap>
                     </TextWrapper>
                  </Column1>

               </PresaleRow>
            </PresaleWrapper>
         </PresaleContainer>
      </>
   )
}

export default PreSale;
