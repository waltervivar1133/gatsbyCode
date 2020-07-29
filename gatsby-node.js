exports.createPages = async({ actions, graphql, reporter}) =>{

  const resultado = await graphql(`
  query {
    allDatoCmsHabitacion{
      nodes{
       slug
        }
       
      }
    }
  `)
    // console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.error){
      reporter.panic ('no hubo resultados ', resultado.errors);
    }

    // si hay paginas , crear los arvhivos

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
      actions.createPage({
          path: habitacion.slug,
          component: require.resolve('./src/components/habitaciones.jsx'),
          context: {
            slug: habitacion.slug
          }
      })
    })
}