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
  const [words, setWords] = useState<string[]>([]); // 유효한 단어가 입력된 state 배열
  const [rowState, setRowState] = useState<BoardState>([]); // 유효한 단어가 입력된 각 box의 state 배열
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

      // isUsed가 설정된 answer 복사본 생성, isUsed는 중복된 알파벳의 접근을 막기위한 변수
      const copyAnswer = answer.split('').map((alphabet) => {
        return { alphabet: alphabet, isUsed: false };
      });

      // 한 줄의 box의 상태는 exact, close, none이다.
      // 아래의 로직을 통해 exact, close만 설정하기 때문에 기본 배열의 값은 none으로 생성한다.
      const result: CurrentRowCalculateResult = ['none', 'none', 'none', 'none', 'none'];

      // 위치와 알파벳이 일치하는지를 판별하는 로직
      word.split('').forEach((alphabet, index) => {
        if (alphabet === answer[index]) {
          copyAnswer[index].isUsed = true;
          result[index] = 'exact';
        }
      });

      // 위치는 다르지만 일치하는 알파벳이 있는지를 판별하는 로직
      // isUsed를 통해 이미 한 번 설정 된 알파벳은 방문하지 않는다.
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

  // alert창을 등장시키는 state가 true일 때 2초후에 false로 변하도록 settimeout 설정
  useEffect(() => {
    if (isCurruentRowJiggle)
      setTimeout(() => {
        setIsCurruentRowJiggle(false);
      }, ALERT_TIME_LIMIT);
  }, [isCurruentRowJiggle]);

  // alert창을 등장시키는 state가 true일 때 2초후에 false로 변하도록 settimeout 설정
  useEffect(() => {
    if (isShowAlert)
      setTimeout(() => setIsShowAlert(false), ALERT_TIME_LIMIT - ALERT_ANIMATION_DELAY);
  }, [isShowAlert]);

  // board 안의 모든 row에 유효한 단어를 입력했는데도, 답을 찾지 못하면 alert창을 통해 답을 알려주는 로직
  useEffect(() => {
    if (words.length > 5) {
      printAlertMessage(`${ALERT_MESSAGE.INCORRECT}${answer}`);
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
