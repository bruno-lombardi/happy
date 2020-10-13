import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    background: #ebf2f5;
    color: #fff;
  }
  
  body,
  input,
  button,
  textarea {
    font: 600 18px Nunito, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`

export default GlobalStyles
