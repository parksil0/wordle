import { BoxAnimation, BoxState } from '../../types';
import { AlphabetBox } from './index.styles';

interface Props {
  alphabet: string | null;
  animation?: BoxAnimation;
  boxState?: BoxState;
  dataTestId?: string;
}

const index = ({ alphabet, animation, boxState, dataTestId }: Props) => {
  return (
    <AlphabetBox data-testid={dataTestId} animation={animation} boxState={boxState}>
      {alphabet}
    </AlphabetBox>
  );
};

export default index;
