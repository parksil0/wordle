import { useEffect, useState } from 'react';

import AlertPortal, { Alert } from '../../components/Alert';
import Board from '../../components/Board';
import Keyboard from '../../components/Keyboard';
import {
  ALERT_ANIMATION_DELAY,
  ALERT_MESSAGE,
  ALERT_TIME_LIMIT,
  WORD_MAX_LENGTH,
} from '../../constants';
import VALID_WORD_LIST from '../../constants/validWordList';
import { BoardState, BoxState } from '../../types';
import { getAnswer } from '../../utils';
import { Wrapper } from './index.styles';

const answer = getAnswer();
console.log(answer);

type CurrentRowCalculateResult = [BoxState, BoxState, BoxState, BoxState, BoxState];

const Index = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [word, setWord] = useState('');
  const [words, setWords] = useState<string[]>([]);
  const [rowState, setRowState] = useState<BoardState>([]);
  const [isCurruentRowJiggle, setIsCurruentRowJiggle] = useState(false);

  const printAlertMessage = (message: string) => {
    setMessage(message);
    setIsShowAlert(true);
  };

  const onKeydownEnter = () => {
    if (word.length < WORD_MAX_LENGTH) {
      printAlertMessage(ALERT_MESSAGE.NOT_ENOUGH_LETTERS);
      setIsCurruentRowJiggle(true);
      return;
    }

    if (answer === word.toLowerCase()) {
      printAlertMessage(ALERT_MESSAGE.CORRECT);
    }

    if (VALID_WORD_LIST.includes(word.toLowerCase())) {
      if (!words[0]) setWords([word]);
      else setWords([...words, word]);

      const copyAnswer = answer.split('').map((alphabet) => {
        return { alphabet: alphabet, isUsed: false };
      });

      const result: CurrentRowCalculateResult = ['none', 'none', 'none', 'none', 'none'];

      word.split('').forEach((alphabet, index) => {
        if (alphabet === answer[index]) {
          copyAnswer[index].isUsed = true;
          result[index] = 'exact';
        }
      });

      word.split('').map((alphabet, index) => {
        if (alphabet === answer[index]) return;
        else if (answer.includes(alphabet)) {
          const targetIndex = answer.split('').indexOf(alphabet);
          if (copyAnswer[targetIndex].isUsed) return '';
          copyAnswer[targetIndex].isUsed = true;
          result[index] = 'close';
        }
      });

      if (!rowState[0]) setRowState([result]);
      else setRowState([...rowState, result]);

      setWord('');
    } else {
      printAlertMessage(ALERT_MESSAGE.NOT_IN_WORD_LIST);
      setIsCurruentRowJiggle(true);
      return;
    }
  };

  const onKeydownBackspace = () => {
    if (!word) return;
    setWord((prev) =>
      prev
        .split('')
        .slice(0, prev.length - 1)
        .join(''),
    );
  };

  const onKeydownWord = (key: string) => {
    if (word.length >= WORD_MAX_LENGTH) return;
    setWord((prev) => prev + key);
  };

  useEffect(() => {
    if (isCurruentRowJiggle)
      setTimeout(() => {
        setIsCurruentRowJiggle(false);
      }, ALERT_TIME_LIMIT);
  }, [isCurruentRowJiggle]);

  useEffect(() => {
    if (isShowAlert)
      setTimeout(() => setIsShowAlert(false), ALERT_TIME_LIMIT - ALERT_ANIMATION_DELAY);
  }, [isShowAlert]);

  useEffect(() => {
    if (words.length > 5) {
      printAlertMessage(`${ALERT_MESSAGE}${answer}`);
    }
  }, [words]);

  return (
    <Wrapper>
      <Board
        word={word}
        words={words}
        rowState={rowState}
        isCurruentRowJiggle={isCurruentRowJiggle}
      />
      <Keyboard
        onKeydownEnter={onKeydownEnter}
        onKeydownWord={onKeydownWord}
        onKeydownBackspace={onKeydownBackspace}
      />
      {isShowAlert && (
        <AlertPortal>
          <Alert message={message} />
        </AlertPortal>
      )}
    </Wrapper>
  );
};

export default Index;
