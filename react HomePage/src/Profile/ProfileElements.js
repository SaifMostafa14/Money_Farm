import styled from 'styled-components';


export const ProfileContainer = styled.div`
 background: #0cocOc;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relative;
 Z-index: 1
 `;

export const ProfileContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProfileH1 = styled.h1`
  color: red;
  font-size: 48px;
  text-align: center;

  @media screen and (max-wodth: 768px) {
    font-size: 40px
  }
  @media screen and (max-wodth: 480px) {
    font-size: 32px
  }
`

