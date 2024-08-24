import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.6);

  ${({ $isLeaving: isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.2s forwards;`}
`;

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  animation: ${scaleIn} 0.3s;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  > h1 {
    font-size: 22px;
    color: ${({ theme, $danger: danger }) => (danger ? theme.danger : theme.gray[900])};
  }

  .modal-body {
    margin-top: 32px;
    word-break: break-word;
  }

  ${({ $isLeaving: isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.2s forwards;`}
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: 32px;
  align-items: center;
  justify-content: end;

  .cancel-button {
    border: none;
    font-size: 16px;
    margin-right: 24px;
    background: transparent;
    color: ${({ theme }) => theme.gray[200]};

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
