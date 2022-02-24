import styled from '@emotion/styled';

export const AlertWithoutButton = styled.p`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  animation: fade 2s linear;

  @keyframes fade {
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
  }
}
`;
