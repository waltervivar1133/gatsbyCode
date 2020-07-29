import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';
import styled from '@emotion/styled';
import {Link} from 'gatsby';

const EnlaceHome = styled(Link)`

  color : #ffffff;
  text-align: center;
  text-decoration: none;

`
const Footer = ({title}) => {
  const year = new Date().getFullYear();
  return ( 
    <footer     // esta forma de insertar css es como un props dentro de la etiqueta
      css={css`  
      background-color:rgba(44,62,80);
      padding: 1rem;
      margin-top: 4rem;
       

      `
      }
   >
    

        <div
          css={css`
          
            max-width:1200px;
            margin: 0 auto;
              @media (min-width:768px){
              display:flex;
              align-items: center;
              justify-content: space-between;
        }
          `}
        >
            <Navegacion/>
          <EnlaceHome
          
          to= "/">
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
         
       
        </div>

        <p css= {css`
     text-align: center;
     color: #fff;
     background-color: rgb(33,44,55);
     margin:0;
     padding: 1rem;
     
     `}>{title} Todos los derechos reservados {year} &copy;</p>
    </footer>


    );
}
 
export default Footer;