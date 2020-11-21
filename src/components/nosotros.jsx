import React from 'react';
import {graphql , useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css}  from '@emotion/core';

const Contenido = styled.main`
  background: #DDFFFF;
  padding:2rem;
  border-radius:1rem;
  border-left:4px solid #2196F3;
  max-width: 1200px;
  width:100%;
  margin: 1rem auto;

  @media (min-width:768px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
 
  }
  @media (max-width:768px){
    padding:0rem;
    flex-wrap: wrap;
  }

  p {
    line-height:2;
    margin-top:2rem;
  }
 
;`

const Titulos = styled.main`
  margin: 0 auto;
  padding-top: 15rem;
  line-height:0;
  text-align: center;
  font-size:3rem;
  font-family: 'PT Sans' , sans-serif;
  font-style: italic;
  @media (max-width:768px){
    padding-top: 20rem;
  }
`

const ContenidoNosotros = () => {

  const resultado = useStaticQuery(graphql`
   {
    allDatoCmsPagina(filter :{ slug:{ eq: "nosotros"}}){
      nodes{
        titulo
        contenido
        imagen{
          fluid(maxWidth:1200)
          {  ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `);
  const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];
  return ( 
    <>

    <Titulos>
      <h2>{titulo}</h2>
    </Titulos>
     
      <Contenido>
        <p css={css`
          text-align: center;
          font-family: roboto;
          font-size: 16px;
          font-weight:500;
        `}>{contenido}</p>

      
          <Image fluid={imagen.fluid} />
      </Contenido>
      <Contenido>
      <h1>Dirección</h1>
        <span css={css`
          display: flex;
          text-align:center;
          font-weight: bold;
        `}>Altura 12 av.alameda sur calle 3 Mz i lt 33 Villa Magisterial los cedros | chorrillos</span>
      </Contenido>
    </>
   );
}
 
export default ContenidoNosotros;