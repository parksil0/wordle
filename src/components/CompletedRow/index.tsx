import { useEffect, useState } from 'react';

import { AlphabetBoxAnimation, BoxState } from '../../types';
import { AlphabetBox } from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  word: string;
  rowState: BoxState[];
}

const index = ({ word, rowState }: Props) => {
  const [animation, setAnimation] = useState<AlphabetBoxAnimation[]>(
    Array.from({ length: 5 }, () => undefined),
  );
  const [color, setColor] = useState<BoxState[]>(
    Array.from({ length: 5 }, () => undefined),
  );

  useEffect(() => {
    if (word[0]) {
      animation.forEach((_, index) => {
        setTimeout(() => {
          const copyAnimation = [...animation];
          copyAnimation[index] = 'flip';
          setAnimation(copyAnimation);
        }, (index + 1) * 500);
      });
    }
  }, [word]);

  useEffect(() => {
    if (rowState) {
      rowState.forEach((_, index) => {
        setTimeout(() => {
          setColor((prev) => {
            const copyColor: BoxState[] = [...prev];
            copyColor[index] = rowState[index];
            return [...copyColor];
          });
        }, (index + 1) * 600);
      });
    }
  }, [rowState]);

  return (
    <BoxContainer>
      {word.split('').map((alphabet, index) => (
        <AlphabetBox
          key={`${alphabet}-${index}`}
          status={animation[index]}
          state={color[index]}>
          {alphabet}
        </AlphabetBox>
      ))}
    </BoxContainer>
  );
};

export default index;
