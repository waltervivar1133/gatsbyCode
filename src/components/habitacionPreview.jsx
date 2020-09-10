import React from 'react'
import Image from 'gatsby-image'
import {css } from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';


const Boton = styled(Link)`

  margin-top : 2rem;
  padding: 1rem;
  background-color: #F19FC5;
  width:100%;
  color : #fff;
  display : block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight:700;
  text-align:center;
`

const HabitacionPreview = ({habitacion}) => {
  
    const {contenido, imagen , titulo , slug , categoria, precio} = habitacion;

  return ( 


    <div
      css={css`
        border : 1px solid #e1e1e1;
        margin-bottom: 2rem;
      
      `}>
     <Image
      fluid={imagen.fluid}
      />
      <div
        css={css`
          padding: 3rem;
        `}
      >
       <h3
        css = {css`
          font-size:3rem;
          color:#16A3E2;
          
        `}
       >{titulo}</h3>
       <span css={css`
        background: #16A3E2;
        padding: 0.5em;
        border-radius:5px;
        color : white;
        font-weight: bold;
        font-size: 14px;
        font-family: arial, sans-serif;

       
       `}> Categoria : {categoria}</span>
       <p>{contenido}</p>
       <span css={css`
        background: green;
        padding: 0.5em;
        min-width: 100%;
        border-radius:5px;
        color : white;
        font-weight: bold;
        font-size: 14px;
        font-family: arial, sans-serif;

       
       `}> Precio : s/ {precio} soles</span>
    
        <Boton 
           to = {slug}>
            Ver Producto
        </Boton>
  
       
      </div>
    </div>
  );
}
 
export default HabitacionPreview;