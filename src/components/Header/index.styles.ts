import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  border-bottom: 1px solid lightgray;
  height: 50px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1`
  margin: 0px;

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
