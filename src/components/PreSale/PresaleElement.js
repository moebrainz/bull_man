import styled from "styled-components";

export const PresaleContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
position: relative;
display: grid;
margin-top: 80px;
padding: 100px 0;


`

export const PresaleWrapper = styled.div`
display: grid;
z-index: 1;
height: 700px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;


`

export const PresaleRow = styled.div`
grid-template-columns: 1fr;

@media screen and (max-width: 768px) {
   grid-template-columns: 1fr;
   word-wrap: break-word;
   
}


`

export const Column1 = styled.div`
margin-bottom: 20px;
padding: 0 10px;
`



export const TextWrapper = styled.div`
   max-width: 540px;
   padding-top: 0;
   padding-bottom: 80px;

  
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
color: #fff;
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 480px) {
   font-size: 25px;
   }
`
export const Subtitle = styled.p`
color: #fff;
max-width: 468px;
margin-bottom: 35px;
font-size: 9px;
line-height: 15px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
justify-content: center;
word-wrap: break-word;


`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
height: 100%;
`


