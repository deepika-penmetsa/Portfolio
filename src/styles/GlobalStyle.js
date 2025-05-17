import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.size};
    line-height: ${props => props.theme.font.lineHeight};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    overflow-x: hidden;
    transition: background-color 0.3s, color 0.3s;
    --bg-color: ${props => props.theme.background};
    --text-color: ${props => props.theme.foreground};
    --accent-color: ${props => props.theme.accent};
    --accent-color-rgb: ${props => props.theme.name === 'dark' ? '0, 227, 170' : '3, 102, 214'};
    --heading-color: ${props => props.theme.heading};
    --border-color: ${props => props.theme.border};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem 0;
    font-weight: 600;
    line-height: 1.2;
    color: ${props => props.theme.syntax.function};
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${props => props.theme.secondary};
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button:not(.no-style), 
  input[type="button"], 
  input[type="submit"] {
    cursor: pointer;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: none;
    font-family: ${props => props.theme.font.family};
    font-size: 1rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${props => props.theme.secondary};
    }

    &:focus {
      outline: none;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.border};
    border-radius: 5px;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.activeBorder};
  }

  ::selection {
    background-color: ${props => props.theme.selection};
    color: ${props => props.theme.foreground};
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle; 