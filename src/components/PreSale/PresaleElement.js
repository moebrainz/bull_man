import styled from "styled-components";

export const PresaleContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
position: relative;
display: flex;
margin-top: 80px;

@media screen and (max-width: 768px){
   padding: 100px 0;
}
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
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
grid-template-areas: "span" "span"  ; 

@media screen and (max-width: 768px) {
   grid-template-columns: 1fr;
   grid-template-rows: 0.3fr 0.3fr;
   grid-template-areas:  "span" "span";
}
`

export const Column1 = styled.div`
margin-bottom: 20px;
padding: 0 10px;
grid-area: span;
`

export const Column2 = styled.div`
margin-bottom: 20px;
padding: 0px 10px;
grid-area: span;

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
max-width: 480px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
height: 100%;
`


export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`