import {graphql, useStaticQuery} from 'gatsby';

const useHabitaciones = () => {

  const data = useStaticQuery(graphql`

  query {
    allDatoCmsHabitacion{
        nodes{
          titulo
          id
          slug
          contenido
          categoria
          imagen{
            fluid(maxWidth:1200){
              ...GatsbyDatoCmsFluid
            }
          }
       
        }
     }
  }
  `);

  
  return data.allDatoCmsHabitacion.nodes.map(habitacion =>({
    titulo: habitacion.titulo,
    id: habitacion.id,
    slug: habitacion.slug,
    contenido : habitacion.contenido,
    imagen : habitacion.imagen,
    categoria : habitacion.categoria,

  }))
}
 
export default useHabitaciones;