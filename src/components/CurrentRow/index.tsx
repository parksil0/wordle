import { WORD_MAX_LENGTH } from '../../constants';
import AlphabetBox from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  word: string;
  isCurruentRowJiggle: boolean;
}

const index = ({ word, isCurruentRowJiggle }: Props) => {
  const emptyWord =
    word.length < WORD_MAX_LENGTH
      ? Array.from({ length: WORD_MAX_LENGTH - word.length }, () => '')
      : [];

  return (
    <BoxContainer data-testid="current-row" isCurruentRowJiggle={isCurruentRowJiggle}>
      {word.split('').map((alphabet, index) => (
        <AlphabetBox
          dataTestId={`current-row-box-index-${index}`}
          key={`1row-${index}-${alphabet}`}
          animation="pop"
          alphabet={alphabet}
        />
      ))}
      {emptyWord.map((value, index) => (
        <AlphabetBox key={`1row-${index}-${value}`} alphabet={value} />
      ))}
    </BoxContainer>
  );
};

export default index;
