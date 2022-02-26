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
        // 사용자가 입력한 박스는 아래의 태그가 설정된다.
        <AlphabetBox
          dataTestId={`current-row-box-index-${index}`}
          key={`1row-${index}-${alphabet}`}
          animation="pop"
          alphabet={alphabet}
        />
      ))}
      {/* 아직 입력되지 않은 박스는 아래의 태그가 설정된다 */}
      {emptyWord.map((value, index) => (
        <AlphabetBox key={`1row-${index}-${value}`} alphabet={value} />
      ))}
    </BoxContainer>
  );
};

export default index;
