import React from 'react';
import { graphql , useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';


const TextoInicio = styled.div`
  padding-top:4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width:768px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap : 2rem
  }

  p {
    line-height:2;

  }
`


const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`{
    allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
      nodes {
        titulo
        contenido
        imagen {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `);

    // console.log(informacion.allDatoCmsPagina.node[0]);

    // llamamos la data
    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];
  return ( 

    <>
          <h2
            css= {css`
            
              text-align: center;
              font-size: 4rem;
              margin-top: 4rem;
              text-decoration: underline;
              color : #F19FC5;
              font-weight:700;
            `}
          
          
          > {titulo}</h2>
          <TextoInicio>
            <p>{contenido}</p>
            <Image css={css`
              border: 5px solid   #16A3E2;
            `} fluid={imagen.fluid} alt="pantalla principal"/>  
            {/* las imagenes siempre van sin comillas */}
          </TextoInicio>
    </>


   );
}
 
export default ContenidoInicio;