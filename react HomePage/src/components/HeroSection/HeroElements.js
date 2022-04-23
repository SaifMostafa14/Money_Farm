import styled from 'styled-components';


export const HeroContainer = styled.div`
 background: #0cocOc;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 650px;
 position: relative;
 Z-index: 1
 `;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroTable = styled.div`
table {
  border-collapse: collapse;
  box-shadow: 0 5px 10px  gray;
  background-color: white;
  text-align: left;
  overflow: hidden;
}

th {
  padding: 1rem 4rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  font-weight: 400;
}

td {
  padding: 1rem 4rem;
}

tr:nth-child(even){
  background-color: #e6e6e6;
}
`

