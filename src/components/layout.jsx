import React from 'react';
import {Global, css} from '@emotion/core';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Helmet from 'react-helmet';  // helmet es para poder insertar data dentro del head  
import UseSeo from '../hooks/use-seo.jsx';  



const Layout = (props) => {
  const Seo =  UseSeo();
    const { fallbackSeo: {description, title}} = Seo;

 
  return ( 
    <>
      <Global
        styles={css `
          $lime: #c5dc50;
          $rasp: #f36a6f;
          $seed: #383838;
          $sm: 1rem;
          $md: 2.5rem;
          $lg: 4rem;
        
         html{
           font-size: 62.5%;
           box-sizing: border-box;
         }
         *,*:before, *after{
           box-sizing: inherit;
         }
         body{
           font-size:18px;
           font-size: 1.8rem;
           line-height:1.5;
           padding: 0;
           margin: 0;
           background: #fffff6;

         }
         h1 , h2{
          font-family: 'Fredoka One', cursive;

         }

         h3{
          font-family: 'Varela Round', sans-serif;

         }
         ul{
           list-style: none;
           margin: 0;
           padding: 0;
         }


        `}
      
      />
      <Helmet>  
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Varela+Round&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Helmet>
      <Header/>
      {props.children}
         <Footer

          title = {title}
         
         />

    </>
   );
}
 
export default Layout;