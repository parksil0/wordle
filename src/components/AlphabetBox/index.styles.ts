import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { BoxAnimation, BoxState } from '../../types';

export const AlphabetBox = styled.div<{
  animation?: BoxAnimation;
  boxState?: BoxState;
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

  ${({ animation }) => {
    if (animation === 'pop') {
      return css`
        animation: ${pop} 0.3s linear 1;
        border: 2px solid black;
      `;
    } else if (animation === 'flip') {
      return css`
        animation: ${flip} 0.6s linear;
        animation-fill-mode: backwards;
      `;
    }
  }}

  ${({ boxState }) => boxState && boxStyle[boxState]}
`;

const boxStyle = {
  exact: css`
    background-color: #6aaa64;
    border: 2px solid #6aaa64;
    color: white;
  `,
  close: css`
    background-color: #c9b458;
    border: 2px solid #c9b458;
    color: white;
  `,
  none: css`
    background-color: #787c7e;
    border: 2px solid #787c7e;
    color: white;
  `,
};

const pop = keyframes`
  50% {
    transform: scale(1.1);
  }
`;

const flip = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;
