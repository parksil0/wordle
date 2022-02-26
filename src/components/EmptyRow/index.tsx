import { EmptyRow } from '../../types';
import { AlphabetBox } from '../AlphabetBox';
import { BoxContainer } from '../BoxContainer';

interface Props {
  emptyRow: EmptyRow;
}

const index = ({ emptyRow }: Props) => {
  return (
    <BoxContainer>
      {emptyRow.map((value, index) => (
        <AlphabetBox key={`${value}-${index}`}>{value}</AlphabetBox>
      ))}
    </BoxContainer>
  );
};

export default index;
