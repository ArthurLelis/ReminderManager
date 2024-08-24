import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 80%;
`;

export const RequiredInfo = styled.span`
  color: ${({ theme }) => theme.danger};
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
