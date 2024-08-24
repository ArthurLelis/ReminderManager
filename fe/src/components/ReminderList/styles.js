import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 80%;

  ${({ $center: center }) => center && css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
