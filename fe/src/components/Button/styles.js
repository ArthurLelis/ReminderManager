import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  color:  #fff;
  height: 52px;
  border: none;
  display: flex;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.specialTextColor};

  &[disabled] {
    cursor: default !important;
    background: #ccc !important;
  }

  ${({ theme, $danger: danger }) => danger && css`
    background: ${theme.danger};
  `}
`;
