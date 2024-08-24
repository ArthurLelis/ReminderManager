import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;

  @media (max-width: 1000px) {
   margin-top: 1rem;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    gap: 2rem;
    align-items: center;
    flex-direction: column;
  }
`;
