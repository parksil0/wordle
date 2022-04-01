import { memo, MouseEvent, useEffect, useState } from 'react';

import {
  keyboardArray,
  THIRD_DELETE_BUTTON_INDEX,
  THIRD_ENTER_BUTTON_INDEX,
} from '../../constants';
import { BoxState } from '../../types';
import { Grid, KeyboardButton, KeyboardEmptySpace, Row } from './index.styles';

const [first, second, third] = keyboardArray;

interface Props {
  onKeydownWord: (key: string) => void;
  onKeydownEnter: () => void;
  onKeydownBackspace: () => void;
  words: string[];
  keyState: BoxState[];
}

const Index = ({
  onKeydownWord,
  onKeydownEnter,
  onKeydownBackspace,
  words,
  keyState,
}: Props) => {
  const [bar, setBar] = useState<{ [key: string]: BoxState }>({});
  useEffect(() => {
    if (words.length) {
      const copyBar = { ...bar };
      keyboardArray.flat().forEach((value) => {
        if (words[words.length - 1].includes(value.toLocaleLowerCase())) {
          const foo = keyState[words[words.length - 1].indexOf(value.toLowerCase())];
          copyBar[value] = foo;
        }
      });
      setTimeout(() => {
        setBar(copyBar);
      }, 3200);
    }
  }, [words]);

  // keydown(enter, backspace, a-z) 이벤트 설정
  useEffect(() => {
    const listener = ({ key }: KeyboardEvent) => {
      if (key === 'Enter') onKeydownEnter();
      else if (keyboardArray.flat().indexOf(key.toUpperCase()) > -1) onKeydownWord(key);
      else if (key === 'Backspace') onKeydownBackspace();
    };

    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [onKeydownWord, onKeydownEnter, onKeydownBackspace]);

  const onClickAlphabetButton = (e: MouseEvent<HTMLButtonElement>, alphabet: string) => {
    e.currentTarget.blur();
    onKeydownWord(alphabet);
  };

  const onClickNonAlphabetButton = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.currentTarget.blur();
    index === THIRD_DELETE_BUTTON_INDEX ? onKeydownBackspace() : onKeydownEnter();
  };

  return (
    <Grid>
      <Row>
        {first.map((alphabet) => (
          <KeyboardButton
            key={alphabet}
            onClick={(e) => onClickAlphabetButton(e, alphabet)}
            keyState={bar[alphabet]}>
            {alphabet}
          </KeyboardButton>
        ))}
      </Row>
      <Row>
        <KeyboardEmptySpace />
        {second.map((alphabet) => (
          <KeyboardButton
            key={alphabet}
            onClick={(e) => onClickAlphabetButton(e, alphabet)}
            keyState={bar[alphabet]}>
            {alphabet}
          </KeyboardButton>
        ))}
        <KeyboardEmptySpace />
      </Row>
      <Row>
        {third.map((alphabet, index) =>
          index === THIRD_DELETE_BUTTON_INDEX || index === THIRD_ENTER_BUTTON_INDEX ? (
            <KeyboardButton
              flex={1.5}
              key={alphabet}
              onClick={(e) => onClickNonAlphabetButton(e, index)}>
              {alphabet}
            </KeyboardButton>
          ) : (
            <KeyboardButton
              key={alphabet}
              onClick={(e) => onClickAlphabetButton(e, alphabet)}
              keyState={bar[alphabet]}>
              {alphabet}
            </KeyboardButton>
          ),
        )}
      </Row>
    </Grid>
  );
};

export default memo(Index);
