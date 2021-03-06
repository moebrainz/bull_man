import styled from 'styled-components';
import { Link as LinkB } from 'react-router-dom';


export const Button = styled(LinkB)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-bottom: 10px;
text-decoration: none;

&:hover {
   transition: all 0.2s ease-in-out;
   background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};

}

`

export const ButtonLink = styled.a`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;
display: flex;
text-decoration: none;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-bottom: 10px;

&:hover {
   transition: all 0.2s ease-in-out;
   background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};

}

`
   ;
