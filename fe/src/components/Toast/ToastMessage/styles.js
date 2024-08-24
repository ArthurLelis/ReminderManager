import styled, { css, keyframes } from 'styled-components';

const messageIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const messageOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
`;

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.specialTextColor};
  `,
  success: css`
    background: ${({ theme }) => theme.success};
  `,
  danger: css`
    background: ${({ theme }) => theme.danger};
  `,
};

export const Container = styled.div`
  color: #fff;
  display: flex;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  animation: ${messageIn} 0.3s;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  ${({ type }) => containerVariants[type] || containerVariants.default};

  ${({ $isLeaving: isLeaving }) => isLeaving && css`animation: ${messageOut} 0.2s forwards;`}

  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`;
