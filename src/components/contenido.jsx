import React from 'react';
import { graphql , useStaticQuery} from 'gatsby';

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

    console.log(informacion);
  return ( 

    <>
          <h2>titulo de pagina</h2>
    </>


   );
}
 
export default ContenidoInicio;