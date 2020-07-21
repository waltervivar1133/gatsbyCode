import React from 'react';
import {css} from '@emotion/core';
import Navegacion from './nav';

const Header = () => {
  return ( 
    <header     // esta forma de insertar css es como un props dentro de la etiqueta
      css={css`  
      background-color:#222;
      padding: 1rem;

       

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
          <h1
            css={css`
              color: #fff;
              text-align: center;
            
            
            `}
          
          >Hotel Gatsby</h1>
          <Navegacion>

          </Navegacion>
        </div>
    </header>
    );
}
 
export default Header;