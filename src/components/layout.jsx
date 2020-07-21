import React from 'react';
import {Global, css} from '@emotion/core';
import Header from './header.jsx';
import Helmet from 'react-helmet';  // helmet es para poder insertar data dentro del head    



const Layout = (props) => {
  return ( 
    <>
      <Global
        styles={css `
         html{
           font-size: 62.5%;
         }
         body{
           font-size:18px;
           font-size: 1.8rem;
           line-height:1.5
         }
         h1 , h2{
           font-family: 'Roboto', serif;
         }

         h3{
           font-family: 'PT Sans' , sans-serif;
         }
         ul{
           list-style: none;
           margin: 0;
           padding: 0;
         }


        `}
      
      />
      <Helmet>  
        <title>Gatsby Hotel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>
      </Helmet>
      <Header/>
      {props.children}
   
    </>
   );
}
 
export default Layout;