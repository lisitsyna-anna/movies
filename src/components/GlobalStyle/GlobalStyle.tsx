import { createGlobalStyle, DefaultTheme } from 'styled-components';
import 'normalize.css';
import { ITheme } from '../../interfaces';

interface IGlobalStyleProps {
  theme: DefaultTheme & ITheme;
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  * {
    box-sizing: border-box;
  }
  body {
    margin: ${p => p.theme.space[0]}px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};

    color: ${p => p.theme.colors.primaryText};
    background-color: ${p => p.theme.colors.backgroundBody};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: ${p => p.theme.space[0]}px;
  }

  ul {
      list-style: none;
      padding: ${p => p.theme.space[0]}px;
      margin: 0;
  }

  img {
      display: block;
      max-width: 100%;
      height: auto;
  }

  a{
    text-decoration: none;
    color: inherit
  }

  button{
   cursor: pointer;
  }
`;

export default GlobalStyle;
