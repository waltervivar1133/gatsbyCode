import React from "react";
import Layout from '../components/layout.jsx';
import Imagen from '../components/imagen.jsx';
import HabitacionPreview from '../components/habitacionPreview.jsx'
import ContenidoInicio from '../components/contenido.jsx';
import useHabitaciones from '../hooks/use-habitaciones.jsx';
import {css} from '@emotion/core';
import styled from '@emotion/styled';


const ListadoHabitaciones = styled.ul`
  max-width:1200px;
  width:95%;
  margin: 4rem auto 0 auto; 

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap:3rem;
  }

`

const IndexPage = () => {

   const habitaciones =  useHabitaciones();
  console.log(habitaciones);
  return (
    <Layout>
      <Imagen/>
      <ContenidoInicio />
        <h2 css={css`
        width:auto;
        text-align: center;
        margin-top:5rem;
        font-size: 4rem;
        text-decoration: underline ;
        color: #E85B57;
        text-decoration-color: #E85B57;
        text-decoration-skip: 1px;
          `
        }>Nuestras Habitaciones</h2>

        <ListadoHabitaciones >
          {habitaciones.map(habitacion=>(

            <HabitacionPreview

              key= {habitacion.id}
              habitacion= {habitacion}
            
            />
          ))}
        </ListadoHabitaciones>
       
    </Layout>
    
  )
}

export default IndexPage
