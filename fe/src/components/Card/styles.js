import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40%;
  padding: 1rem;
  display: flex;
  max-height: 25rem;
  overflow-y: scroll;
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.specialTextColor};

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleCard = styled.h2`
  margin: 0 0 1rem;
`;

export const Separator = styled.hr`
  width: 90%;
  margin: 0 0 1rem;
`;
