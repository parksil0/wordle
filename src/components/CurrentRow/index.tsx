import { AlphabetBox } from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  word: string;
  isCurruentRowJiggle: boolean;
}

const index = ({ word, isCurruentRowJiggle }: Props) => {
  const emptyWord =
    word.length < 5 ? Array.from({ length: 5 - word.length }, () => '') : [];

  return (
    <BoxContainer isCurruentRowJiggle={isCurruentRowJiggle}>
      {word.split('').map((alphabet, index) => (
        <AlphabetBox key={`1row-${index}-${alphabet}`} status="pop">
          {alphabet}
        </AlphabetBox>
      ))}
      {emptyWord.map((value, index) => (
        <AlphabetBox key={`1row-${index}-${value}`}>{value}</AlphabetBox>
      ))}
    </BoxContainer>
  );
};

export default index;
