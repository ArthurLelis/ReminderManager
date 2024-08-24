import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  background: #fff;
  border-radius: 4px;
  margin-top: 0.5rem;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  &:focus {
    border-color: ${({ theme }) => theme.specialTextColor};
  }

  ${({ theme, $error: error }) => error && css`
    color: ${theme.danger};
    border-color: ${theme.danger} !important;
  `};
`;
