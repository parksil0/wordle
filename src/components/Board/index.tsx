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
        {words.map((word, index) => (
          <CompletedRow
            key={`${word}-${index}`}
            word={word}
            rowState={rowState[index]}
            rowIndex={index}
          />
        ))}

        {words.length === ROW_MAX_LENGTH ? null : (
          <CurrentRow word={word} isCurruentRowJiggle={isCurruentRowJiggle} />
        )}

        {emptyRow?.map((row, index) => (
          <EmptyRow key={index} emptyRow={row} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default index;
