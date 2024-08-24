import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    transition: background 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.specialTextColor};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.specialTextColor};
  }

  * {
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    padding: 2.5rem 8rem 0rem;
    transition: background 0.5s ease-in;
    background: ${({ theme }) => theme.backgroundColor};

    @media (max-width: 1300px) {
      padding: 2.5rem 4rem 0rem;
    }

    @media (max-width: 1024px) {
      padding: 2.5rem 2rem 0rem;
    }

    @media (max-width: 768px) {
      padding: 2.5rem 2rem 0rem;
    }

    @media (max-width: 320px) {
      padding: 2rem 1rem 0rem;
    }
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
