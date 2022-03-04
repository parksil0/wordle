import VALID_WORD_LIST from '../constants/validWordList';

export const getAnswer = () =>
  VALID_WORD_LIST[Math.floor(Math.random() * VALID_WORD_LIST.length)];
