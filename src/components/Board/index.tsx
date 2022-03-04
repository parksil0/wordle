import { EMPTY_ROW_MAX_LENGTH, ROW_MAX_LENGTH } from '../../constants';
import { BoardState, EmptyRow as EmptyRowType } from '../../types';
import CompletedRow from '../CompletedRow';
import CurrentRow from '../CurrentRow';
import EmptyRow from '../EmptyRow';
import { Grid, Wrapper } from './index.styles';

interface Props {
  word: string;
  words: string[];
  rowState: BoardState;
  isCurruentRowJiggle: boolean;
}

const index = ({ word, words, rowState, isCurruentRowJiggle }: Props) => {
  const emptyRow: EmptyRowType[] | null =
    words.length < ROW_MAX_LENGTH
      ? Array.from({ length: EMPTY_ROW_MAX_LENGTH - words.length }, () => [
          '',
          '',
          '',
          '',
          '',
        ])
      : null;

  return (
    <Wrapper>
      <Grid>
        {/* 유효한 단어가 입력된 row */}
        {words.map((word, index) => (
          <CompletedRow
            key={`${word}-${index}`}
            word={word}
            rowState={rowState[index]}
            rowIndex={index}
          />
        ))}

        {/* 현재 작성중인 row */}
        {words.length === ROW_MAX_LENGTH ? null : (
          <CurrentRow word={word} isCurruentRowJiggle={isCurruentRowJiggle} />
        )}

        {/* 비어있는 row */}
        {emptyRow?.map((row, index) => (
          <EmptyRow key={index} emptyRow={row} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default index;
