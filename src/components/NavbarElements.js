import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: #232837;
padding: 30px 40px;
`;

export const NavWrapper = styled.ul`
  list-style-type: none;
  display: inline;

  

`;

export const NavElementsRight = styled.li`
float: right;
font-size: 20px;
color: white;
background-color: #FF7C0A;
justify-content: center;
text-align: center;
padding: 10px;
border-radius: 10px;
position: relative;
bottom: 10px;
&:hover{
        cursor: pointer;
        opacity: 70%;
    }
    @media screen and (max-width: 500px){
    font-size: 15px;
  }
  @media screen and (max-width: 400px){
    font-size: 13px;
  }
 
`;

export const NavLink = styled(LinkR)`
  text-decoration: none;
  list-style-type: none;
  color: #FF7C0A;
text-decoration: none;
font-size: 20px;
font-weight: 900;

@media screen and (max-width: 500px){
    font-size: 15px;
  }
  @media screen and (max-width: 400px){
    font-size: 13px;
  }
`;



export const NavElementsLeft = styled.li`
  color: white;
  float: left;
  
  `;