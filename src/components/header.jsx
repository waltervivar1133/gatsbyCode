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
const Header = () => {
  return ( 
    <header     // esta forma de insertar css es como un props dentro de la etiqueta
      css={css`  
      background: #FF007C;
      padding: 1rem;
      position: fixed;
      z-index: 99999;
      width: 100%;
      margin: 0;
      border-bottom: 3px solid white;
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
          <EnlaceHome
          
          to= "/">
            <h1 css={css`
            color: #fff;`}>Cunas Americo</h1>
          </EnlaceHome>
         
         <Navegacion/>
        </div>
    </header>
    );
}
 
export default Header;