import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';

import { ALERT_MESSAGE } from '../../constants';
import Wordle from './';

// 답은 항상 apple로 한다.
vi.mock('../../utils/index.ts', () => {
  return {
    getAnswer: vi.fn(() => 'apple'),
  };
});

afterEach(() => cleanup());

test('다섯자리 알파벳을 입력하지 않고 엔터 키 입력 시 alert창이 호출된다', () => {
  const { container, getByText } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'Enter' });

  expect(getByText(ALERT_MESSAGE.NOT_ENOUGH_LETTERS)).toBeTruthy();
});

test('backspace키 입력 시 알파벳은 지워진다.', () => {
  const { container, getByTestId } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'Backspace' });
  fireEvent.keyDown(container, { key: 'B' });

  expect(getByTestId('current-row-box-index-0').innerHTML).toBe('A');
  expect(getByTestId('current-row-box-index-1').innerHTML).toBe('B');
});

test('유효하지 않은 단어 입력 시 alert창이 호출된다.', () => {
  const { container, getByText } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'B' });
  fireEvent.keyDown(container, { key: 'C' });
  fireEvent.keyDown(container, { key: 'D' });
  fireEvent.keyDown(container, { key: 'E' });
  fireEvent.keyDown(container, { key: 'Enter' });

  expect(getByText(ALERT_MESSAGE.NOT_IN_WORD_LIST)).toBeTruthy();
});

test('현재 row에서 다섯자 이상 입력해도 다섯자만 렌더링된다.', () => {
  const { container, getByTestId } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'B' });
  fireEvent.keyDown(container, { key: 'C' });
  fireEvent.keyDown(container, { key: 'D' });
  fireEvent.keyDown(container, { key: 'E' });
  fireEvent.keyDown(container, { key: 'F' });
  fireEvent.keyDown(container, { key: 'G' });

  expect(getByTestId('current-row').childElementCount).toBe(5);
});

test('유효한 단어 입력 시 completed row에 등록된다.', () => {
  const { container, getByTestId } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'W' });
  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'K' });
  fireEvent.keyDown(container, { key: 'E' });
  fireEvent.keyDown(container, { key: 'Enter' });

  expect(getByTestId('completed-row-1')).toBeTruthy();
});

test('정답 입력 시 alert창과 함께 "정답입니다!"가 호출된다.', () => {
  const { container, getByText } = render(<Wordle />);

  fireEvent.keyDown(container, { key: 'A' });
  fireEvent.keyDown(container, { key: 'P' });
  fireEvent.keyDown(container, { key: 'P' });
  fireEvent.keyDown(container, { key: 'L' });
  fireEvent.keyDown(container, { key: 'E' });
  fireEvent.keyDown(container, { key: 'Enter' });

  expect(getByText(ALERT_MESSAGE.CORRECT)).toBeTruthy();
});

test('정답을 맞추지 못하면 정답을 알려주는 alert창을 호출한다', () => {
  const { container, getByText } = render(<Wordle />);

  // board 내의 입력을 다 채우기 위한 배열
  const keydownAlphabets = [
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
    'A',
    'W',
    'A',
    'K',
    'E',
    'Enter',
  ];

  keydownAlphabets.forEach((key) => {
    fireEvent.keyDown(container, { key: key });
  });

  expect(getByText(`${ALERT_MESSAGE}apple`)).toBeTruthy();
});
