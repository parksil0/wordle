import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex: 1 1 0;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;

  width: 500px;
  max-height: 600px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0px;
  font-size: 4rem;
  line-height: 2rem;
  font-weight: bold;
  box-sizing: border-box;
  text-transform: uppercase;
  text-align: center;
  border: 3px solid #d3d6da;

  caret-color: transparent;
  
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 2rem;
  }
`;
