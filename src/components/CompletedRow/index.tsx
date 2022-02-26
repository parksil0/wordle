import { useEffect, useState } from 'react';

import {
  EACH_BOX_FLIP_ANIMATION_DELAY,
  SWITCH_FLIP_COLOR_DELAY,
  WORD_MAX_LENGTH,
} from '../../constants';
import { AlphabetBoxAnimation, BoxState } from '../../types';
import AlphabetBox from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  word: string;
  rowState: BoxState[];
  rowIndex: number;
}

const index = ({ word, rowState, rowIndex }: Props) => {
  const [animation, setAnimation] = useState<AlphabetBoxAnimation[]>(
    Array.from({ length: WORD_MAX_LENGTH }, () => undefined),
  );
  const [color, setColor] = useState<BoxState[]>(
    Array.from({ length: WORD_MAX_LENGTH }, () => undefined),
  );

  // box가 하나씩 flip animation이 적용될 수 있도록 settimeout을 설정
  useEffect(() => {
    if (word[0]) {
      animation.forEach((_, index) => {
        setTimeout(() => {
          const copyAnimation = [...animation];
          copyAnimation[index] = 'flip';
          setAnimation(copyAnimation);
        }, (index + 1) * EACH_BOX_FLIP_ANIMATION_DELAY);
      });
    }
  }, [word]);

  // box가 반쯤 뒤집힐 쯤 배경색이 변하도록 settimeout 설정
  useEffect(() => {
    if (rowState) {
      rowState.forEach((_, index) => {
        setTimeout(() => {
          setColor((prev) => {
            const copyColor: BoxState[] = [...prev];
            copyColor[index] = rowState[index];
            return [...copyColor];
          });
        }, (index + 1) * SWITCH_FLIP_COLOR_DELAY);
      });
    }
  }, [rowState]);

  return (
    <BoxContainer data-testid={`completed-row-${rowIndex + 1}`}>
      {word.split('').map((alphabet, index) => (
        <AlphabetBox
          key={`${alphabet}-${index}`}
          animation={animation[index]}
          boxState={color[index]}
          alphabet={alphabet}
        />
      ))}
    </BoxContainer>
  );
};

export default index;
