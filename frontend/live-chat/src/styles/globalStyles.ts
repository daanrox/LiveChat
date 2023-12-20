import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        border: none;
    }
    body, html{        
        height: 100vh;
    }
    
    body{       
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
    button, input, select, option, label, textarea{
        font-family: "Inter", sans-serif;
    }
    ul,ol{
        list-style: none;
    }
    button, link, a{
        cursor: pointer;
    }
    input, textarea, select{
        border-radius: 0;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }   

    :root{
        --font-inter: 'Inter', sans-serif;

        --color-primary: #00df6a;
        --color-black: #363636;
        --color-white: #ffffff;
        --color-gray: #F3F3F3;
        --color-blue: #55A3FF;
    } 


`;
