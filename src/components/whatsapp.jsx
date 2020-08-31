import React from 'react';
import Whatsapp from '../images/whatsapp.svg';
import {css} from '@emotion/core';

const enlace = 'https://api.whatsapp.com/send?phone=51997703400&text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos!%20Muchas%20gracias'

const whatsapp = () => {
  return ( 
<>
    <a 
      css={css`
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      right:40px;
      background-color:#25d366;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      font-size:30px;
      z-index:100;
      `}

    href={enlace} target = {"_blank"} >
    <img src={ Whatsapp } 
 alt=""/>  
    </a>


</>
   );
}
 
export default whatsapp;