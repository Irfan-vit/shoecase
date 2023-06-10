import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: var(--font-family-body);
    scroll-behavior: smooth
  }
*, *::before, *::after {
    box-sizing: inherit;
    Margin:0;
    Padding:0;
    Border:0; 
}
body  {
  background-color: ${(props) => props.theme.primaryBg};
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.offSetBg}; 
}
 
::-webkit-scrollbar-thumb {
  background:${(props) => props.theme.action};
}

::-webkit-scrollbar-thumb:hover {
  background:${(props) => props.theme.primaryBg};
}
}
`
export default GlobalStyles
