import styled from '@emotion/styled';

export const BoxContainer = styled.div<{ isCurruentRowJiggle?: boolean }>`
  display: flex;
  width: 100%;
  flex: 1 1 0;
  gap: 5px;

  ${({ isCurruentRowJiggle }) =>
    isCurruentRowJiggle &&
    `
    animation: shake-animation 0.5s ease;
  
  `};

  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(5px, 0);
    }
    20% {
      transform: translate(0, 0);
    }
    30% {
      transform: translate(5px, 0);
    }
    40% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(5px, 0);
    }
    60% {
      transform: translate(0, 0);
    }
    70% {
      transform: translate(5px, 0);
    }
    80% {
      transform: translate(0, 0);
    }
    90% {
      transform: translate(5px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
