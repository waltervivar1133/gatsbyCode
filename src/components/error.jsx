import React from 'react';
import { css} from '@emotion/core';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const EnlaceHome = styled(Link)`

    font-family: "Fontdiner Swanky", cursive;
    font-size: $sm;
    color: $seed;
    border: none;
    background-color: $rasp;
    padding: $sm $md;
    transform: skew(-5deg);
    transition: all 0.1s ease;
    cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/cursors-eye.png"),
      auto;
    &:hover {
      background-color: $lime;
      transform: scale(1.15);
    }

`
const error = () => {


  return (

    <>
    <div css = {css`
     display: flex;
    align-items: center;
    height: 100vh;
    max-width: 1000px;
    width: calc(100% - #{$lg});
    margin: 0 auto;
  > * {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 500px;
    width: 100%;
    padding: $md;
  }`}>
      <aside css={css`
       background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/right-edges.png");
      background-position: top right;
      background-repeat: no-repeat;
      background-size: 25px 100%;
      `
    }><img  css={css`
    
    display: block;
    height: auto;
    width: 100%;
    
    `}src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" />
      </aside>
      <main css={css`text-align: center;`}>
        <h1 css={css`
         font-family: "Fontdiner Swanky", cursive;
        font-size: $lg;
        color: $lime;
        margin-bottom: $sm;
        `}>Dispulpe!</h1>
        <p css={css`
        margin-bottom: $md;`}>
         Esta pagina no existe
        </p>
        <EnlaceHome  to= "/">Regrese al Home!</EnlaceHome>
    </main>
  </div>

    </>
    );
}
 
export default error;