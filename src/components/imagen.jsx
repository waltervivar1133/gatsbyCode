import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const Img = styled(BackgroundImage)`
  
  height:900px;

` ;

const TextoImagen = styled.div`

  background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,59, 63, .8));
  color : #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  flex: 1;
  h1{
    font-size: 4rem;
    margin: 0%;
    color: #16A3E2;
    padding: 5px;
    background: #fff;
    border-radius:4px;
    font-weight: bold;
    @media (min-width:992px){
      font-size: 5.8rem;
    }
  }
  h2 {
    color : #fff;
    font-size:3rem;
    text-align:center;
    padding: 5px;
    background: #fff;
    border-radius:4px;
    color: #16A3E2;
    font-weight: bold;
    @media (min-width:992px){
      font-size: 3.5rem;
    }
  }
`



const Imagen = () => {

  const {image} = useStaticQuery(graphql`
  query{
    image: file(relativePath: {eq: "9.jpg"})
    {
      sharp:childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
  `);


  return ( 

  <Img tag="section"  fluid={image.sharp.fluid}>
    <TextoImagen>
      <h1>Cunas </h1>
        <h2>Los mejores implementos para tu bebé </h2>
    </TextoImagen>
    
  </Img>
   );
}
 
export default Imagen;