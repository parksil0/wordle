import { useState } from 'react';

import AlertPortal, { Alert } from '../../components/Alert';
import Input from '../../components/AlphabetInput';
import Keyboard from '../../components/Keyboard';
import { ERROR_MESSAGE } from '../../constants';
import { Wrapper } from './index.styles';

const Index = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);

  const onClickTempAlertButton = () => {
    setIsShowAlert(true);
    setTimeout(() => setIsShowAlert(false), 1900);
  };

  return (
    <Wrapper>
      <button onClick={onClickTempAlertButton}>alert 테스트 버튼</button>
      <Input />
      <Keyboard />
      {isShowAlert && (
        <AlertPortal>
          <Alert message={ERROR_MESSAGE.TEST} />
        </AlertPortal>
      )}
    </Wrapper>
  );
};

export default Index;
