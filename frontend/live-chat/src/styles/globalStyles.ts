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
        --color-gray2: #E4E4E4;
        --color-blue: #55A3FF;
    } 


  ::-webkit-scrollbar {
    width: 8px; 
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-gray2);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary); 
    border-radius: 6px; 
  }

  
  scrollbar-width: thin; 
  scrollbar-color: var(--color-primary) var(--color-gray2);
`;
