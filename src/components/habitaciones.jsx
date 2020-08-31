import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout.jsx';
import Image from 'gatsby-image';
import {css} from '@emotion/core';

export const query = graphql`
query($slug : String) {
  allDatoCmsHabitacion(filter: {slug:{ eq: $slug }}){
    nodes{
      titulo
      contenido
      imagen{
        fluid(maxWidth:1200){
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}


`

const HabitacionesTemplate = ({data : {allDatoCmsHabitacion:{ nodes }}}) => {

const {titulo, contenido, imagen} = nodes[0];
  return ( 

    <Layout>
      
       <main css={css`
       margin: 0 auto;
       max-width:1200px;
       width:100%;
       
       
       
       `} >
          <h1  css={css`
            text-align:center;
            padding-top:15rem;
            margin:0;
            @media (max-width:768px){
              padding-top:25rem;
            }
          `}>{titulo}</h1>
          <p css={css`
            background: #DDFFFF;
            padding: 2rem;
            border-radius: 1rem;
            font-family: roboto;
            font-weight:300;
            font-style: italic;
            text-align: center;
            @media (max-width:768px){
              padding: 1rem;
            }
          
          `}>{contenido}</p>
          <Image
            fluid={imagen.fluid}
          >

          </Image>
       </main>
    </Layout>
   );
}
 
export default HabitacionesTemplate;