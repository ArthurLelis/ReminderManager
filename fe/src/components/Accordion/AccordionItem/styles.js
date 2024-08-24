import styled, { css } from 'styled-components';

export const ContainerAccordionItem = styled.div`
  overflow: hidden;
  border: 1px solid black;
`;

export const InfoAccordion = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 0.8rem;
  justify-content: space-between;
  transition: font-weight 0.3s ease-in;
  border: 1px solid ${({ theme }) => theme.specialTextColor};
  background-color: ${({ theme }) => theme.specialTextColor};

  ${({ $isOpen: isOpen }) => isOpen && css`
    font-weight: bold;
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  `}

  &:hover {
    background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
  }
`;

export const ContainerAction = styled.div`
  gap: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ButtonDeleteDay = styled.div`
  cursor: pointer;
`;

export const Arrow = styled.img`
  transform: rotate(180deg);
  transition: transform 0.3s ease-in;

  ${({ $isOpen: isOpen }) => isOpen && css`
    transform: rotate(0deg);
  `}
`;

export const ContainerBody = styled.div`
  padding: 0;
  height: 0px;
  padding-left: 8px;
  max-height: 11rem;
  overflow-y: scroll;
  transition: height .7s ease-in-out;

  .delete-all {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      font-weight: bold;
      background: transparent;
      color: ${({ theme }) => theme.danger};
    }
  }

  ${({ $isOpen: isOpen }) => isOpen && css`
    height: 11rem;
  `}
`;

export const ContainerReminder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentReminder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Reminder = styled.p`
  margin: 0;
  padding: 1rem;
  word-break: break-word;
`;

export const ButtonDeleteReminder = styled.button`
  background: transparent;
`;

export const Separator = styled.hr`
  margin: 0;
  width: 90%;
`;
