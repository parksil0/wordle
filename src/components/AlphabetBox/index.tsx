import styled from '@emotion/styled';

import { BoxState } from '../../types';

export const AlphabetBox = styled.div<{
  status?: 'pop' | 'flip';
  state?: BoxState;
}>`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  user-select: none;
  border: 2px solid #d3d6da;

  &:before {
    content: '';
    padding-bottom: 100%;
    display: inline-block;
  }

  ${({ status }) => {
    if (status === 'pop') {
      return `
        animation: pop 0.3s linear 1;
        border: 2px solid black;  
      `;
    } else if (status === 'flip') {
      return `animation: flip 0.6s linear;
        animation-fill-mode: backwards;`;
    }
  }}

  @keyframes pop {
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  ${({ state }) => {
    if (state === 'exact')
      return `
        background-color: #6aaa64;
        border: 2px solid #6aaa64;
        color: white;
    `;
    else if (state === 'close')
      return `
        background-color: #c9b458;
        border: 2px solid #c9b458;
        color: white;
    `;
    else if (state === 'none')
      return `
        background-color: #787c7e;
        border: 2px solid #787c7e;
        color: white;
    `;
  }}
`;
