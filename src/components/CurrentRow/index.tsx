import AlphabetBox from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  word: string;
  isCurruentRowJiggle: boolean;
}

const index = ({ word, isCurruentRowJiggle }: Props) => {
  const emptyWord =
    word.length < 5 ? Array.from({ length: 5 - word.length }, () => '') : [];

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
