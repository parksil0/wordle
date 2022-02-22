import { memo } from 'react';

import {
  keyboardArray,
  THIRD_DELETE_BUTTON_INDEX,
  THIRD_ENTER_BUTTON_INDEX,
} from '../../constants';
import { Grid, KeyboardButton, KeyboardEmptySpace, Row } from './index.styles';

const Index = () => {
  const [first, second, third] = keyboardArray;
  return (
    <Grid>
      <Row>
        {first.map((alphabet) => (
          <KeyboardButton key={alphabet}>{alphabet}</KeyboardButton>
        ))}
      </Row>
      <Row>
        <KeyboardEmptySpace />
        {second.map((alphabet) => (
          <KeyboardButton key={alphabet}>{alphabet}</KeyboardButton>
        ))}
        <KeyboardEmptySpace />
      </Row>
      <Row>
        {third.map((alphabet, index) =>
          index === THIRD_DELETE_BUTTON_INDEX || index === THIRD_ENTER_BUTTON_INDEX ? (
            <KeyboardButton flex={1.5} key={alphabet}>
              {alphabet}
            </KeyboardButton>
          ) : (
            <KeyboardButton key={alphabet}>{alphabet}</KeyboardButton>
          ),
        )}
      </Row>
    </Grid>
  );
};

export default memo(Index);
