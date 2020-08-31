import React from 'react';
import {Link } from 'gatsby';
import styled from '@emotion/styled';
import Whatsapp from './whatsapp.jsx';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom:3rem;
    @media (min-width:768px){
      padding-bottom:0;
      
    }
`;

const NavLink = styled(Link)`
  color: #000;
  font-size: 1.6rem;
  font-weight:700;
  line-height: 1rem;
  font-family: 'PT Sans', sans-serif;
  padding: 1rem;
  margin: 1rem;
  text-decoration: none;

  &:last-of-type {
    margin-right:0;
  }

  &.pagina-actual{
    border-bottom: 2px solid #E85B57;
    transition-duration:0.1s;
    transition-delay:0.1s;
    
  }
  &:hover{
    border-bottom: 2px solid #E85B57;
    transition:all 0.1s ease;
  }

`

const Navegacion = () => {
  return ( 
    <Nav>
      <NavLink to ={'/'}
       activeClassName='pagina-actual' >Inicio</NavLink>
      <NavLink to ={'/nosotros'}
      activeClassName='pagina-actual'>Nosotros</NavLink>
      <Whatsapp/>
    </Nav>
    
  );
}
 
export default Navegacion;