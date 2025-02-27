import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.danger};
  }

  .form-item {
    position: relative;
  }
`;
