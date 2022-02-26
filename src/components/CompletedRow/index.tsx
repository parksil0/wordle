import { useEffect, useState } from 'react';

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
