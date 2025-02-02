import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset default styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.background}; /* Light blue background */
    color: ${props => props.theme.colors.text}; /* Dark text for contrast */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.primary};
  }

  /* Button styling with hover effect */
  button {
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 30px;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: ${props => props.theme.colors.secondary}; /* Darker blue on hover */
    transform: scale(1.05); /* Slight grow effect */
  }

  /* Form inputs */
  input, textarea {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
    width: 100%;
    max-width: 300px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
  }

  input:focus, textarea:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  /* Global Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;

export default GlobalStyles;
